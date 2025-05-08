
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">ML.Portfolio</h2>
            <p className="text-secondary-foreground/80 max-w-md">
              Building intelligent systems that solve real-world problems through machine learning and artificial intelligence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-secondary-foreground/80 hover:text-secondary-foreground">Home</a></li>
              <li><a href="#projects" className="text-secondary-foreground/80 hover:text-secondary-foreground">Projects</a></li>
              <li><a href="#achievements" className="text-secondary-foreground/80 hover:text-secondary-foreground">Achievements</a></li>
              <li><a href="#courses" className="text-secondary-foreground/80 hover:text-secondary-foreground">Courses</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@example.com" className="hover:text-secondary-foreground">contact@example.com</a>
              </li>
              <li>
                <div className="flex items-center gap-4 mt-4">
                  <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/70 text-sm">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
