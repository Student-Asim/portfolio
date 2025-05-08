
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container section-padding min-h-[90vh] flex flex-col justify-center relative z-10">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block">John Doe</span>
            <span className="text-primary block">Machine Learning Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Building AI for the Future
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Specialized in creating intelligent systems that solve real-world problems. From computer vision to natural language processing, I build AI solutions that make a difference.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
