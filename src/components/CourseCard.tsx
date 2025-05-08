
import React from 'react';
import { BookOpen, Calendar, ExternalLink } from "lucide-react";

interface CourseCardProps {
  name: string;
  platform: string;
  date: string;
  certificateLink?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  name,
  platform,
  date,
  certificateLink
}) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg card-hover bg-card">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{platform}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
          </div>
        </div>
      </div>
      
      {certificateLink && (
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80"
          title="View Certificate"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      )}
    </div>
  );
};

export default CourseCard;
