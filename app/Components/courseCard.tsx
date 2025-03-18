"use client"
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Clock, Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';

interface Course {
    id: number,
    course_title: string,
    description: string,
    timeline: string,
    count: string,
    overall_price: number,
    discount_price: number,
    category: string,
    ratings: number,
    status: string,
}

interface CourseCardProps {
    courses: Course[]; 
    title?: string;
    autoScroll?: boolean;
    scrollInterval?: number; // time in ms
}

const ModernCourseCard = ({ 
  courses, 
  title, 
  autoScroll = true, 
  scrollInterval = 5000 
}: CourseCardProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 7;
  
  // Calculate how many items are visible at once based on container width
  const getVisibleItems = () => {
    if (!scrollRef.current) return 3;
    const containerWidth = scrollRef.current.clientWidth;
    return Math.floor(containerWidth / 320); // assuming card width + gap = ~320px
  };

  // Function to scroll to a specific index
  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const normalizedIndex = (index + totalSlides) % totalSlides;
      setActiveIndex(normalizedIndex);
      const itemWidth = 320; // Approximate width of each card + gap
      scrollRef.current.scrollTo({
        left: normalizedIndex * itemWidth * getVisibleItems(),
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    scrollToIndex(activeIndex - 1);
  };

  const scrollRight = () => {
    scrollToIndex(activeIndex + 1);
  };

  // Automatic scrolling
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoScroll && courses.length > getVisibleItems()) {
      interval = setInterval(() => {
        scrollToIndex(activeIndex + 1);
      }, scrollInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeIndex, autoScroll, courses.length, scrollInterval]);

  // Handle manual scroll events to update active index
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = 320 * getVisibleItems();
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <div className="relative">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      
      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 z-10">
        <button 
          onClick={scrollLeft}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 z-10">
        <button 
          onClick={scrollRight}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Carousel container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide" 
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory',
        }}
        onScroll={handleScroll}
      >
        {courses.map((item) => (
          <div 
            key={item.id} 
            className="min-w-[300px] max-w-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white scroll-snap-align-start"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Card content remains the same */}
            {/* Card Image with Gradient Overlay */}
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90"></div>
              <img 
                src="/api/placeholder/800/480" 
                alt={item.course_title}
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-bold text-blue-600">
                {item.status}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 truncate max-w-[120px]">
                  {item.category}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star size={14} fill="currentColor" className="mr-1" />
                  <span className="text-xs font-semibold">{item.ratings}</span>
                </div>
              </div>
              
              <h2 className="font-bold text-xl mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                {item.course_title}
              </h2>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              
              {/* Metrics Row */}
              <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{item.timeline}</span>
                </div>
                <div className="flex items-center">
                  <Users size={14} className="mr-1" />
                  <span>{item.count}</span>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-900 font-bold text-lg">${item.overall_price}</span>
                  <span className="text-gray-500 text-sm line-through ml-2">${item.discount_price}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors duration-200">
                  Enroll Now
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Improved dot indicators */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernCourseCard;