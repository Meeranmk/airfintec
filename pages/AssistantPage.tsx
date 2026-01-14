
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Info } from 'lucide-react';
import { askTechnicalAssistant } from '../services/geminiService';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

const AssistantPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am the AirFinTec technical consultant. How can I help you with your Air-Cooled Heat Exchanger (ACHE) requirements today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await askTechnicalAssistant(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[700px] border border-gray-100">
          {/* Header */}
          <div className="bg-[#FF8C00] p-6 text-white flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold">ACHE Smart Assistant</h2>
                <div className="flex items-center space-x-2 text-xs opacity-80">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Expert Technical Knowledge Base</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-[#333333] text-white' : 'bg-orange-100 text-[#FF8C00]'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-[#333333] text-white rounded-tr-none' : 'bg-gray-100 text-gray-800 rounded-tl-none'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-orange-100 text-[#FF8C00] rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin text-[#FF8C00]" />
                    <span className="text-sm text-gray-500 italic">Technical consultant is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tips Section */}
          <div className="px-6 py-3 bg-orange-50/50 border-t border-orange-100 flex items-center space-x-3 text-xs text-orange-800/70">
            <Info className="w-4 h-4 flex-shrink-0" />
            <p>Ask about: <strong>"L-Foot vs Extruded fins"</strong>, <strong>"Common ACHE vibration causes"</strong>, or <strong>"Tube plugging procedures"</strong>.</p>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask a technical question..."
                className="w-full bg-gray-100 border-none rounded-xl py-4 pl-6 pr-14 outline-none focus:ring-2 focus:ring-[#FF8C00] text-gray-800"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`absolute right-2 top-2 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  input.trim() ? 'bg-[#FF8C00] text-white shadow-lg' : 'bg-gray-300 text-gray-500'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3">
              AI technical consultant provides general guidance. For critical safety-related queries, please consult our engineering team directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantPage;
