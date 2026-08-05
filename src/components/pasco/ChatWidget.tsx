'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Button from '@/components/ui/button';

export default function ChatWidget() {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'agent' }[]>([
    { text: 'Hello! 👋 Welcome to Pasco Foods. How can we help you today?', sender: 'agent' },
  ]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');

    setTimeout(() => {
      const replies = [
        'Thanks for reaching out! Our team will get back to you shortly.',
        'Great question! You can find more details on our products page.',
        'We would love to help! Could you share a bit more about what you need?',
        'That sounds great! Feel free to browse our recipes for inspiration.',
        'Thanks for your interest! Our team is here to help with any questions.',
      ];
      setMessages((prev) => [
        ...prev,
        { text: replies[Math.floor(Math.random() * replies.length)], sender: 'agent' },
      ]);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#214E34] hover:bg-[#1a3f2a] text-white rounded-full flex items-center justify-center shadow-lg transition-colors p-0"
          aria-label="Open chat"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-3.582 8.25-8 8.25S5 16.556 5 12 8.582 3.75 14 3.75s8 3.694 8 8.25Z" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-[500px] flex flex-col p-0 overflow-hidden fixed top-auto bottom-6 right-6 left-auto translate-x-0 translate-y-0 rounded-xl shadow-2xl">
        <DialogHeader className="px-6 py-4 border-b border-[#E5E2DB]">
          <DialogTitle className="text-base font-semibold text-[#1A1A1A]">Chat with Us</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#214E34] text-white'
                    : 'bg-[#F8F5EF] text-[#1A1A1A]'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-[#E5E2DB] flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 h-10 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim()}
            className="h-10 px-4 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Send
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}