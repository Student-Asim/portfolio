
import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  date: string;
  avatar?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role,
  content,
  date,
  avatar
}) => {
  return (
    <Card className="card-hover h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          {avatar ? (
            <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" />
          ) : (
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MessageCircle className="h-6 w-6" />
            </div>
          )}
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
          "{content}"
        </blockquote>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        {date}
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
