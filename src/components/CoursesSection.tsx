
import React from 'react';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const courses = [
    {
      name: "Deep Learning Specialization",
      platform: "Coursera",
      date: "April 2023",
      certificateLink: "https://certificate.example.com"
    },
    {
      name: "Advanced Machine Learning",
      platform: "Stanford Online",
      date: "January 2023",
      certificateLink: "https://certificate.example.com"
    },
    {
      name: "Computer Vision with PyTorch",
      platform: "Udacity",
      date: "November 2022",
      certificateLink: "https://certificate.example.com"
    },
    {
      name: "Natural Language Processing",
      platform: "edX",
      date: "September 2022",
      certificateLink: "https://certificate.example.com"
    },
    {
      name: "Reinforcement Learning",
      platform: "Coursera",
      date: "July 2022",
      certificateLink: "https://certificate.example.com"
    },
    {
      name: "Applied Data Science with Python",
      platform: "DataCamp",
      date: "June 2022",
      certificateLink: "https://certificate.example.com"
    }
  ];

  return (
    <section id="courses" className="section-padding bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Courses & Training</h2>
          <p className="text-lg text-muted-foreground">
            Continuous learning through specialized courses, workshops, and training programs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
