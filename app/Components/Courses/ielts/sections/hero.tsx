import React from 'react';
import { BookOpen, CheckCircle, Target } from 'lucide-react';
import { Figtree } from 'next/font/google';

const figtree = Figtree(
    {
        subsets : ['latin']
    }
)

const IELTSHeroSection = () => {
  return (
    <div className={`relative bg-white py-16 px-4 sm:px-6 lg:px-8 ${figtree.className} `}>
      <div className=" grid md:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
              Crack IELTS with Confidence
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Unlock study, work, or migration opportunities with expert-guided IELTS coaching tailored for you.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span className="text-gray-700">Personalized Learning Paths</span>
            </div>
            <div className="flex items-center space-x-3">
              <BookOpen className="text-green-500 w-6 h-6" />
              <span className="text-gray-700">Certified IELTS Trainers</span>
            </div>
            <div className="flex items-center space-x-3">
              <Target className="text-purple-500 w-6 h-6" />
              <span className="text-gray-700">Free Mock Tests & Live Feedback</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <a 
              href="/courses/ielts-mocktest" 
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Take a Free Mock Test
            </a>
            <a 
              href="/consultation" 
              className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="hidden md:block">
          <img 
            src="https://libraries.sutherlandshire.nsw.gov.au/__data/assets/image/0029/56774/2023_SSL_Students-studying-using-devices-Learning-English_AdobeStock_605131104.jpg" 
            alt="IELTS Preparation" 
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default IELTSHeroSection;