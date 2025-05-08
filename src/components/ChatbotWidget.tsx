
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bot, X, Send } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-card border rounded-lg shadow-lg mb-4 w-80 sm:w-96 max-h-[500px] flex flex-col animate-scale-in">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-medium">AI Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-primary-foreground/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Messages */}
          <div className="p-4 overflow-y-auto flex-1 space-y-4">
            <div className="flex items-start gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-muted p-3 rounded-lg text-sm">
                Hi there! I'm your AI assistant. I can answer questions about John's skills, projects, and experience. How can I help you today?
              </div>
            </div>
          </div>
          
          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="icon" className="h-9 w-9">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Toggle Button */}
      <Button
        className="h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bot className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatbotWidget;
