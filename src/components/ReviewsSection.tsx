
import React from 'react';
import ReviewCard from './ReviewCard';
import { Button } from '@/components/ui/button';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "AI Research Lead, Tech Solutions Inc.",
      content: "John's expertise in machine learning algorithms transformed our data analytics capabilities. His solutions were elegant, efficient, and delivered significant business value.",
      date: "June 2023"
    },
    {
      name: "Michael Chen",
      role: "CTO, AI Innovations",
      content: "Working with John on our computer vision project was a game-changer. His technical knowledge and problem-solving skills helped us overcome several critical challenges.",
      date: "April 2023"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Science Manager, FinTech Solutions",
      content: "John developed a recommendation engine that increased our customer engagement by 37%. His attention to detail and commitment to excellence made all the difference.",
      date: "March 2023"
    }
  ];

  return (
    <section id="reviews" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reviews & Recommendations</h2>
          <p className="text-lg text-muted-foreground">
            Feedback from clients, colleagues, and collaborators on my work and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-xl font-medium mb-2">Have we worked together?</h3>
          <p className="text-muted-foreground mb-4">I'd love to hear about your experience!</p>
          <Button>Share Your Feedback</Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
