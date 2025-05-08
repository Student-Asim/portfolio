
import React from 'react';
import { Badge } from "lucide-react";

interface HighlightCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  description,
  icon
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border card-hover">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon || <Badge className="h-6 w-6" />}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default HighlightCard;
