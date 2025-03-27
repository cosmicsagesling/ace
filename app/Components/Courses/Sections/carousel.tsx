'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Define a type for slide items
interface SlideItem {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  badge?: string;
}

// IELTS Training slide data
const IELTS_SLIDES: SlideItem[] = [
  {
    id: 1,
    title: 'Master IELTS',
    href: '/courses/ielts-preparation',
    description: 'Target high band scores with confidence!',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Enroll Now'
  },
  {
    id: 2,
    title: 'Complete Training',
    href: '/courses/ielts-preparation',

    description: 'In-depth preparation for Listening, Reading, Writing, Speaking',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'View Courses'
  },
  {
    id: 3,
    title: 'Expert-Led Preparation',
    href: '/courses/ielts-preparation',

    description: 'Proven strategies | Expert coaches | Free mock tests',
    imageUrl: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Start Learning'
  },
  {
    id: 4,
    title: 'Proven Success ',
    href: '/courses/ielts-preparation',

    description: 'Join 1000+ students who\'ve aced their IELTS with A.C.E.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Success Stories'
  }
];

const IELTSTrainingCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IELTS_SLIDES.length);
    }, 2900); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const getSlideClass = (index: number) => {
    if (index === currentSlide) {
      return 'w-[60%] opacity-100 scale-100 z-20';
    }

    // Slides to the left and right of the current slide
    const leftIndex = (currentSlide - 1 + IELTS_SLIDES.length) % IELTS_SLIDES.length;
    const rightIndex = (currentSlide + 1) % IELTS_SLIDES.length;

    if (index === leftIndex) {
      return 'w-[20%] opacity-75 scale-95 -translate-x-0 z-10';
    }

    if (index === rightIndex) {
      return 'w-[20%] opacity-75 scale-95 translate-x-0 z-10';
    }

    return 'w-0 opacity-0 scale-75 z-0';
  };

  return (
    <div className="relative w-full h-[600px] flex justify-center items-center overflow-hidden">
      {IELTS_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`
            absolute 
            h-full 
            transition-all 
            duration-700 
            ease-in-out 
            ${getSlideClass(index)}
            relative
          `}
        >
          {/* Background Image */}
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent "></div>

          {/* Content */}
          {index === currentSlide && (
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white max-w-md">
              <h2 className="text-4xl font-bold mb-4 max-md:text-2xl max-md:w-fit max-md:pr-2">{slide.title}</h2>
              <p className="text-xl mb-6 max-md:text-sm">{slide.description}</p>
              <a
                href={slide.href}
                className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                {slide.badge}
              </a>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {IELTS_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default IELTSTrainingCarousel;