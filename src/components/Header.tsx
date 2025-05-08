
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Home, Award, BookOpen, Activity, Badge, MessageCircle, Bot, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home className="h-4 w-4 mr-2" /> },
    { name: 'Projects', icon: <Award className="h-4 w-4 mr-2" /> },
    { name: 'Achievements', icon: <Award className="h-4 w-4 mr-2" /> },
    { name: 'Courses', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: 'Activity', icon: <Activity className="h-4 w-4 mr-2" /> },
    { name: 'Highlights', icon: <Badge className="h-4 w-4 mr-2" /> },
    { name: 'Reviews', icon: <MessageCircle className="h-4 w-4 mr-2" /> },
    { name: 'AI Bot', icon: <Bot className="h-4 w-4 mr-2" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-gradient">ML.Portfolio</div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          size="icon" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t animate-fade-in">
          <div className="container py-4 grid gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
