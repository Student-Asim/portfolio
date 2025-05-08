
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Image Classifier",
      description: "A deep learning model that classifies images using transfer learning with EfficientNet architecture.",
      image: "https://source.unsplash.com/random/800x600/?ai",
      techStack: ["Python", "TensorFlow", "Flask", "React"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com"
    },
    {
      title: "Natural Language Processor",
      description: "An NLP application that performs sentiment analysis and entity recognition on user-provided text.",
      image: "https://source.unsplash.com/random/800x600/?code",
      techStack: ["Python", "BERT", "FastAPI", "Vue"],
      githubUrl: "https://github.com"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "A dashboard that visualizes time-series prediction models for business data.",
      image: "https://source.unsplash.com/random/800x600/?dashboard",
      techStack: ["Python", "Prophet", "D3.js", "Flask"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A collection of my work in machine learning, data science, and artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
