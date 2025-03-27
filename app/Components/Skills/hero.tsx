import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { Figtree } from 'next/font/google';

const figtree = Figtree({
    subsets:['latin']
})

const SkillHeroSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Page Title */}
        <div className="max-w-4xl mx-auto text-center bg-url">
          <h1 className={` ${figtree.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
            Unlock Your Potential with Real-World Skills
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Go beyond test prep — A.C.E. equips you with communication, academic, and career readiness skills to thrive globally.
          </p>
        
          {/* CTA Button */}
          <div className="flex justify-center">
            <a href='/skill-development#lms' className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Discover Our Skill Tracks
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-green-50 to-white -z-10 opacity-50"></div>
    </div>
  );
};

export default SkillHeroSection;