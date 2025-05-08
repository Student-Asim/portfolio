
import React from 'react';
import AchievementCard from './AchievementCard';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "June 2023",
      description: "Certified in building deep learning models using TensorFlow, including CNNs, RNNs, and transformers.",
      credentialLink: "https://credential.example.com"
    },
    {
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "March 2023",
      description: "Certified in designing, implementing, deploying, and maintaining ML solutions on AWS.",
      credentialLink: "https://credential.example.com"
    },
    {
      title: "Kaggle Competition - Top 5%",
      issuer: "Kaggle",
      date: "December 2022",
      description: "Ranked in the top 5% of participants in the Kaggle Image Recognition Challenge.",
      credentialLink: "https://credential.example.com"
    },
    {
      title: "Machine Learning Research Publication",
      issuer: "International Conference on ML",
      date: "October 2022",
      description: "Published research on novel approaches to semi-supervised learning for time series data.",
      credentialLink: "https://credential.example.com"
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Professional recognitions, certifications, and notable accomplishments in AI and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
