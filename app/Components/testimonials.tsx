"use client"
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Figtree } from 'next/font/google';

const figtree = Figtree({
  subsets: ["latin"],
});

interface TestimonialCardProps {
  name: string;
  country: string;
  destination: string;
  university: string;
  review: string | null;
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
      <div className="flex flex-col flex-grow">
        <div className="relative">
          {hasVideo ? (
            <div className="relative w-full h-96">
              <video 
                ref={videoRef}
                src={videoUrl || ""}
                poster={thumbnailUrl || imageUrl || ""}
                className="w-full h-full object-center bg-black"
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
              <img 
                src={imageUrl || "/api/placeholder/400/225"} 
                alt={name} 
                className="w-full h-48 object-cover"
              />
            )
          )}
        </div>

        {review && (
          <div className="p-4">
            <div className="flex items-center mb-3 gap-3">
              <div className="text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p>4.5</p>
            </div>
            
            <p className="text-gray-700 mb-4">{review}</p>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-gray-100 mt-auto">
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

const ACETestimonials = () => {
  const testimonials = [
    {
      name: "Kishor R",
      country: "India",
      destination: "UK",
      university: "University of East London",
      universityLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivbiXlbNafSIHv9GCYuEqLhTQ2EQPe7C0-u4cjrWTW9O2rGt1XWhV-u9VF1DIymsL66s&usqp=CAU",
      review: "It's a wonderful study abroad consultancy and there are a variety of course options available to students. I also find the people and the support they provide exceptional. They truly care about their students and want to see them succeed.",
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
      universityLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSj7Ok6bL5PZ8KBIaoZBNkxu16uOhEOX-pdRwr6QIlgJrBYj2aFn952m6An1yFUBpdy8&usqp=CAU",
      review: "ACE is an amazing training assistant. The team there is very knowledgeable, patient and will guide you through every step of the process. Thank you for your help!",
      hasVideo: true,
      videoUrl: "/t1.mp4",
      thumbnailUrl: "/t1thumb.jpg",
      imageUrl: "/"
    },
    {
      name: "Ezazul Hasan",
      country: "Bangladesh",
      destination: "UK",
      university: "London South Bank University",
      universityLogo: "https://www.elephantandcastle.org.uk/wp-content/uploads/2015/11/LSBU2SQ.jpg",
      review: "I'm delighted to share my positive experience with ACE Bangladesh. They helped me obtain my visa efficiently and professionally, and I am really blessed to have a case officer like Alisha Apu. Her cooperation and guidance walked me through the process, making it stress-free. I highly recommend their services for visa assistance",
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
      universityLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY5CNLrRGPxKFpX3KLbxMrGMwUvSgumB3jQ&s",
      review: "Excellent support from ACE throughout my application process. The team was responsive and knowledgeable.",
      hasVideo: false,
      videoUrl: null,
      thumbnailUrl: null,
      imageUrl: null
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-full">
        <div className="md:text-center mb-12">
          <h2 data-aos="fade-up" className={`${figtree.className} text-5xl max-md:text-3xl font-bold text-gray-900 mb-4`}>Real Success Stories</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 max-w-2xl max-md:text-sm mx-auto">
            Hear from our students who successfully achieved their study abroad dreams with ACE&apos;s guidance
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard  key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ACETestimonials;