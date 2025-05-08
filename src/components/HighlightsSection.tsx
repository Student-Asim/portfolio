
import React from 'react';
import HighlightCard from './HighlightCard';
import { Award, Users, BookOpen, Github } from "lucide-react";

const HighlightsSection = () => {
  const highlights = [
    {
      title: "Top 5% in Global AI Hackathon",
      description: "Recognized for innovative solution in predictive analytics category among 5000+ participants.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "1000+ Students Mentored",
      description: "Helped over a thousand students learn machine learning through workshops and online courses.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Published ML Research Paper",
      description: "Research on novel approaches to semi-supervised learning published in top AI conference.",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "500+ GitHub Stars",
      description: "Open-source ML projects and tutorials have received over 500 stars on GitHub.",
      icon: <Github className="h-6 w-6" />
    }
  ];

  return (
    <section id="highlights" className="section-padding bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Highlights</h2>
          <p className="text-lg text-muted-foreground">
            Key achievements and milestones in my journey as an AI developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
