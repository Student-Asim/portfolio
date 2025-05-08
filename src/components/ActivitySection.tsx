
import React from 'react';
import ActivityItem from './ActivityItem';

const ActivitySection = () => {
  const activities = [
    {
      title: "ML Research Fellowship",
      period: "January 2023 - Present",
      description: "Currently working on research in self-supervised learning for computer vision tasks with limited labeled data.",
      isActive: true
    },
    {
      title: "Contributing to TensorFlow",
      period: "March 2023 - Present",
      description: "Active open-source contributor to TensorFlow, focusing on improving documentation and adding examples.",
      isActive: true
    },
    {
      title: "AI Ethics Workshop",
      period: "May 2023",
      description: "Attended a workshop on ethical considerations in AI development and deployment.",
      isActive: false
    },
    {
      title: "Hackathon Participation",
      period: "April 2023",
      description: "Participated in the Global AI Hackathon, developing a solution for climate change prediction.",
      isActive: false
    }
  ];

  return (
    <section id="activity" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Activity</h2>
          <p className="text-lg text-muted-foreground">
            Current projects, ongoing learning, and recent contributions to the AI community.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {activities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
            {/* Last item's connector fix */}
            <div className="absolute bottom-0 left-5 w-0.5 h-10 bg-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
