import React, { useState, useEffect, useRef } from 'react';
import { Send, RefreshCw } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

function formatBold(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "Hi! I'm GoGreenAI 🌱, your Threads sustainable fashion assistant. Ask me anything about eco-friendly style or fighting fast fashion!",
      sender: 'bot',
    },
  ]);

  const [input, setInput] = useState('');
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const conversationHistory = useRef<string[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q="sustainable fashion" OR "green clothing" OR "eco-friendly fashion" OR "sustainable clothing" OR "ethical fashion" OR "green fashion" OR "recycled clothing" OR "organic clothing" OR "slow fashion" OR "upcycled fashion"&language=en&pageSize=10&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const articles = data.articles.slice(0, 4); // ensure exactly 4
        setNewsArticles(articles);
      })
      .catch((err) => console.error('News fetch error:', err));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    conversationHistory.current.push(`User: ${input}`);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are GoGreenAI, a stylish, kind, and smart sustainable fashion assistant. Keep responses under 120 tokens, bold important phrases using **text**. Use previous context to help you.
Conversation so far:
${conversationHistory.current.slice(-6).join('\n')}
User: ${input}
Assistant:`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botRaw =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I had trouble answering that.';

      conversationHistory.current.push(`Assistant: ${botRaw}`);

      const botMessage: Message = {
        id: crypto.randomUUID(),
        text: botRaw,
        sender: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('AI error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: 'Sorry, something went wrong. Try again!',
          sender: 'bot',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-800 to-green-600 text-white p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
              🤖
            </div>
            <div>
              <h2 className="font-semibold">GoGreenAI</h2>
              <p className="text-sm text-green-100">
                Helping you with sustainable fashion choices
              </p>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-4 transition-all hover:shadow-md text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-800'
                }`}
                dangerouslySetInnerHTML={{ __html: formatBold(msg.text) }}
              />
            </div>
          ))}
          {isLoading && (
            <div className="mb-4 flex justify-start">
              <div className="max-w-[70%] rounded-lg p-4 bg-white text-gray-800">
                <p className="italic text-gray-500">Thinking...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about sustainable fashion..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* News Sidebar */}
      <div className="w-80 bg-white border-l p-4 hidden lg:block">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Latest Sustainable Fashion News</h3>
          <button onClick={fetchNews} className="text-green-600 hover:text-green-700">
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-4">
          {newsArticles.slice(0, 4).map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <h4 className="font-medium text-gray-800 mb-1">{article.title}</h4>
              <p className="text-sm text-gray-600">{article.description}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIChatbot;
