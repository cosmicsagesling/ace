import React from 'react';
import { BookOpen, CheckCircle, Target } from 'lucide-react';
import { Figtree } from 'next/font/google';
import Link from 'next/link';

const figtree = Figtree({
    subsets: ['latin']
});

const iconMap = {
  "CheckCircle": CheckCircle,
  "BookOpen": BookOpen,
  "Target": Target
};

const details = [
  {
    title: "IELTS",
    hero: [
      {
        heading: "Unlock Your Global Potential with IELTS Mastery",
        imgUrl:"https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Transform Your Language Skills into International Opportunities - Comprehensive IELTS Preparation That Guarantees Success",
        highlights: [
          {
            icon: "CheckCircle",
            title: "Personalized Learning Strategies Tailored to Your Needs"
          },
          {
            icon: "BookOpen",
            title: "Expert Trainers with Proven Track Record of High Scores"
          },
          {
            icon: "Target",
            title: "Adaptive Mock Tests with Real-Time Performance Analysis"
          }
        ]
      }
    ]
  },
  {
    title: "PTE",
    hero: [
      {
        heading: "Accelerate Your PTE Success with Precision Coaching",
        imgUrl:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Cutting-Edge PTE Preparation Designed to Maximize Your Score and Open Doors to Global Education and Immigration",
        highlights: [
          {
            icon: "CheckCircle",
            title: "AI-Powered Personalized Learning Paths"
          },
          {
            icon: "BookOpen",
            title: "Certified PTE Specialists with Industry-Leading Techniques"
          },
          {
            icon: "Target",
            title: "Comprehensive Mock Tests Simulating Actual Exam Conditions"
          }
        ]
      }
    ]
  },
  {
    title: "OET",
    hero: [
      {
        heading: "Elevate Your Healthcare Career with OET Excellence",
        imgUrl:"https://www.wles.net/static/assets/ogimage/occupational-english-test-preparation.jpg",
        description: "Specialized OET Preparation Crafted Specifically for Healthcare Professionals - Your Passport to International Medical Opportunities",
        highlights: [
          {
            icon: "CheckCircle",
            title: "Medical Scenario-Based Learning Approach"
          },
          {
            icon: "BookOpen",
            title: "Trainers with Healthcare and Language Expertise"
          },
          {
            icon: "Target",
            title: "Targeted Preparation for Medical Communication Skills"
          }
        ]
      }
    ]
  },
  {
    title: "TOEFL",
    hero: [
      {
        heading: "Conquer TOEFL with Confidence and Precision",
        imgUrl:"https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Comprehensive TOEFL Preparation That Transforms Your English Proficiency and Paves the Way for Academic Excellence",
        highlights: [
          {
            icon: "CheckCircle",
            title: "Adaptive Learning Technology for Optimal Skill Development"
          },
          {
            icon: "BookOpen",
            title: "Experienced Trainers Specializing in Academic English"
          },
          {
            icon: "Target",
            title: "Comprehensive Practice Across All TOEFL Sections"
          }
        ]
      }
    ]
  }
];

const CourseHeroSection = ({title}:{title:string}) => {
  const data = details.find((item) => item.title.toLowerCase() === title.toLowerCase());

  if (!data) {
    return null;
  }

  const heroData = data.hero[0];

  return (
    <div className={`relative bg-white py-16 px-4 sm:px-6 lg:px-8 ${figtree.className}`}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <h1 className="max-md:text-3xl font-semibold text-gray-900 sm:text-5xl md:text-5xl">
              {/* Use text wrapping instead of br tags */}
              <span className="block">{heroData.heading}</span>
            </h1>
            <p className="mt-4 text-md text-gray-600 max-w-md">
              {heroData.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            {heroData.highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || CheckCircle;
              return (
                <div key={index} className="flex items-center space-x-3">
                  <IconComponent className="text-green-500 w-6 h-6" />
                  <span className="text-gray-700">{highlight.title}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/courses/${title.toLowerCase()}-mocktest`} 
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Take a Free Mock Test
            </Link>
            <Link 
              href="/consultation" 
              className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="hidden md:block h-full">
          <img 
            src={heroData.imgUrl}
            alt={`${title} Preparation`} 
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHeroSection;