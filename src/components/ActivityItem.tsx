
import React from 'react';
import { Activity } from "lucide-react";

interface ActivityItemProps {
  title: string;
  period: string;
  description: string;
  isActive?: boolean;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  period,
  description,
  isActive = false
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
          <Activity className="h-5 w-5" />
        </div>
        {/* Timeline connector */}
        <div className="w-0.5 h-full bg-muted mt-2"></div>
      </div>
      <div className="pb-10">
        <h3 className="text-lg font-medium flex items-center gap-2">
          {title}
          {isActive && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              Current
            </span>
          )}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{period}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
