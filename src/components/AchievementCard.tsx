
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";

interface AchievementCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialLink?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  issuer,
  date,
  description,
  credentialLink
}) => {
  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          {credentialLink && (
            <a 
              href={credentialLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <span>{issuer}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
