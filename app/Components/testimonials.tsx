"use client"
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  country: string;
  destination: string;
  university: string;
  review: string;
  hasVideo: boolean;
  imageUrl: string | null;
  videoUrl?: string | null;
  thumbnailUrl?: string | null;
  universityLogo: string;
}

const TestimonialCard = ({ 
  name, 
  country, 
  destination, 
  university, 
  review, 
  hasVideo, 
  imageUrl, 
  videoUrl, 
  thumbnailUrl,
  universityLogo 
}: TestimonialCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md h-full w-full overflow-hidden">
      <div className="p-4 flex-grow">
        <div className="flex items-center mb-3">
          <div className="text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl">★</span>
            ))}
          </div>
          <img src="/api/placeholder/24/24" alt="Google" className="ml-2 h-6 w-6" />
        </div>
        
        <p className="text-gray-700 mb-4">{review}</p>
      </div>
      
      {hasVideo ? (
        <div className="relative">
          <video 
            ref={videoRef}
            src={videoUrl || ""}
            poster={thumbnailUrl || imageUrl || "/api/placeholder/400/225"}
            className="w-full h-48 object-cover"
            muted={isMuted}
            playsInline
            onEnded={() => setIsPlaying(false)}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying && (
              <button 
                onClick={togglePlayPause}
                className="bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 focus:outline-none"
                aria-label="Play video"
              >
                <Play size={32} color="white" />
              </button>
            )}
          </div>
          
          {/* Video Controls */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 flex justify-between items-center transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={togglePlayPause}
              className="text-white p-1 rounded focus:outline-none"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button 
              onClick={toggleMute}
              className="text-white p-1 rounded focus:outline-none"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      ) : (
        imageUrl && (
          <div className="relative">
            <img 
              src={imageUrl || "/api/placeholder/400/225"} 
              alt={name} 
              className="w-full h-48 object-cover"
            />
          </div>
        )
      )}
      
      <div className="p-4 border-t border-gray-100">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center my-2">
          <span className="text-gray-600">{country}</span>
          <span className="mx-2">→</span>
          <span className="text-gray-600">{destination}</span>
        </div>
        
        <div className="flex items-center mt-3">
          {universityLogo ? (
            <img src={universityLogo || "/api/placeholder/30/30"} alt={university} className="h-8 w-8 mr-2" />
          ) : (
            <div className="h-8 w-8 bg-blue-100 rounded-full mr-2 flex items-center justify-center text-blue-500 font-bold text-xs">
              U
            </div>
          )}
          <span className="text-gray-800">{university}</span>
        </div>
      </div>
    </div>
  );
};

const AMOSTestimonials = () => {
  const testimonials = [
    {
      name: "Sami Ullah",
      country: "Pakistan",
      destination: "UK",
      university: "University of East London",
      universityLogo: "/api/placeholder/30/30",
      review: "I had an amazing experience with AMOS Study Abroad Consultants - Faisalabad! My counselor Sir Ahsan, provided invaluable and timely assistance for my Master's admission. Their team's expertise and dedication made the process smooth and stress-free. Highly recommended for anyone seeking top-notch academic support!",
      hasVideo: false,
      imageUrl: null,
      videoUrl: null,
      thumbnailUrl: null
    },
    {
      name: "Aalisha Kundu",
      country: "India",
      destination: "UK",
      university: "Kingston University",
      universityLogo: "/api/placeholder/30/30",
      review: "I'm delighted to share my positive experience with AMOS. They helped me obtain my visa efficiently and professionally.",
      hasVideo: true,
      videoUrl: "/t1.mp4",
      thumbnailUrl: "/Ace Logo.jpg",
      imageUrl: "/api/placeholder/400/225"
    },
    {
      name: "Ezazul Hasan",
      country: "Bangladesh",
      destination: "UK",
      university: "London South Bank University",
      universityLogo: "/api/placeholder/30/30",
      review: "I'm delighted to share my positive experience with AMOS Bangladesh. They helped me obtain my visa efficiently and professionally, and I am really blessed to have a case officer like Alisha Apu. Her cooperation and guidance walked me through the process, making it stress-free. I highly recommend their services for visa assistance",
      hasVideo: false,
      imageUrl: null,
      videoUrl: null,
      thumbnailUrl: null
    },
    {
      name: "Mahmudul Hasan",
      country: "Bangladesh",
      destination: "UK",
      university: "Aston University",
      universityLogo: "/api/placeholder/30/30",
      review: "Excellent support from AMOS throughout my application process. The team was responsive and knowledgeable.",
      hasVideo: true,
      videoUrl: "/t2.mp4",
      thumbnailUrl: "/api/placeholder/400/225",
      imageUrl: "/api/placeholder/400/225"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who successfully achieved their study abroad dreams with AMOS's guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default AMOSTestimonials;