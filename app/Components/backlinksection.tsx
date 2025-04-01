import React from 'react';
import Link from 'next/link';
import { BacklinkItem } from '../data/types/content';
import { Card, CardContent } from '@/components/ui/card';
import { Figtree } from 'next/font/google';
import { BookOpen, FileText, GraduationCap, Lightbulb } from 'lucide-react';

const figtree = Figtree({
  subsets: ['latin']
});

interface BacklinksSectionProps {
  backlinks: BacklinkItem[];
}

export default function BacklinksSection({ backlinks }: BacklinksSectionProps) {
  if (!backlinks || backlinks.length === 0) return null;

  // Group backlinks by type
  const groupedBacklinks = backlinks.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, BacklinkItem[]>);

  const getIconByType = (type: string) => {
    switch (type) {
      case 'course':
        return <GraduationCap className="w-5 h-5" />;
      case 'test':
        return <FileText className="w-5 h-5" />;
      case 'resource':
        return <BookOpen className="w-5 h-5" />;
      case 'service':
        return <Lightbulb className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getUrlByType = (type: string, slug: string) => {
    switch (type) {
      case 'course':
        return `/courses/${slug}`;
      case 'test':
        return `/mock-tests/${slug}`;
      case 'resource':
        return `/resources/${slug}`;
      case 'service':
        return `/services/${slug}`;
      default:
        return `/${slug}`;
    }
  };

  return (
    <Card className="mt-8 bg-white/90 backdrop-blur-sm shadow-md">
      <CardContent className="pt-6">
        <h3 className={`${figtree.className} text-2xl font-semibold mb-4`}>Related Content</h3>
        
        {Object.entries(groupedBacklinks).map(([type, items]) => (
          <div key={type} className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-slate-700 flex items-center gap-2">
              {getIconByType(type)}
              <span>Related {type.charAt(0).toUpperCase() + type.slice(1)}s</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map(item => (
                <Link 
                  href={getUrlByType(item.type, item.slug)} 
                  key={item.id}
                  className="block"
                >
                  <div className="border border-slate-200 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex items-start">
                      <div className="mr-2 mt-1">{getIconByType(item.type)}</div>
                      <div>
                        <h5 className="font-medium text-slate-900">{item.title}</h5>
                        {item.description && (
                          <p className="text-sm text-slate-600 mt-1 line-clamp-2">{item.description}</p>
                        )}
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {item.examType && (
                            <span className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              {item.examType}
                            </span>
                          )}
                          {item.tags?.slice(0, 2).map(tag => (
                            <span key={tag} className="inline-block text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}