import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  keyFigures?: Array<{
    name: string;
    contribution: string;
    image?: string;
    wikiLink?: string;
  }>;
}

export function TimelineCard({ year, title, description, image, keyFigures }: TimelineCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-2xl font-bold text-indigo-600">{year}</span>
        <div className="ml-4 h-0.5 flex-1 bg-indigo-200"></div>
      </div>
      
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      {keyFigures && keyFigures.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-700">Key Figures:</h3>
          <div className="grid gap-4">
            {keyFigures.map((figure, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                {figure.image && (
                  <img 
                    src={figure.image} 
                    alt={figure.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-800">{figure.name}</h4>
                    {figure.wikiLink && (
                      <a
                        href={figure.wikiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                        title={`Read more about ${figure.name} on Wikipedia`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{figure.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}