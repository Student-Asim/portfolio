
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import CoursesSection from '@/components/CoursesSection';
import ActivitySection from '@/components/ActivitySection';
import HighlightsSection from '@/components/HighlightsSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AchievementsSection />
        <CoursesSection />
        <ActivitySection />
        <HighlightsSection />
        <ReviewsSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
