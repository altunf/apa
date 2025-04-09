"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

const ProfileCard = ({ title, description, content, link }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="text-lg">
          {Array.isArray(content) ? (
            content.map((line, index) => (
              <CardDescription className="text-lg" key={index}>
                {line}
              </CardDescription>
            ))
          ) : (
            <CardDescription className="text-lg">{content}</CardDescription>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button>
                Sayfaya Git <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
