"use client"
import React, { useState } from 'react';
import { 
  Target, 
  Brain, 
  Book, 
  FileText, 
  Calendar, 
  TrendingUp, 
  ChevronRight 
} from 'lucide-react';

const BENEFITS = [
  {
    icon: Target,
    title: 'Personalized Feedback',
    description: 'Direct guidance from certified IELTS trainers tailored to your unique learning needs.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Cutting-edge simulations that adapt to your learning style and skill level.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Book,
    title: 'Comprehensive Resources',
    description: 'Lifetime access to an extensive library of study materials and practice resources.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: FileText,
    title: 'Mock Test Mastery',
    description: 'Free full-length mock tests with instant, detailed scoring and performance analysis.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Calendar,
    title: 'Flexible Learning',
    description: 'Choose your preferred mode: Online, In-Person, or Hybrid learning options.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: TrendingUp,
    title: 'Guaranteed Progress',
    description: 'Proven strategies with a track record of significantly improving IELTS scores.',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

const BenefitsSection: React.FC = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  return (
    <div className="py-16 bg-white">
      <div className="md:px-9 px-3">
        <div className=" mb-12">
          <h2 className="text-5xl max-md:text-4xl font-bold text-gray-800 mb-4">
            Your Path to IELTS Success
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl max-md:text-sm ">
            Unlock your potential with our comprehensive  <br  className='md:hidden'/> IELTS preparation program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className={`
                relative 
                group 
                transform 
                transition-all 
                duration-300 
                ${hoveredBenefit === index 
                  ? 'scale-105 shadow-2xl' 
                  : 'scale-100 shadow-lg'}
                hover:scale-105 
                hover:shadow-2xl 
                bg-white 
                rounded-2xl 
                overflow-hidden
                border 
                border-gray-100
              `}
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              {/* Gradient Background */}
              <div 
                className={`
                  absolute 
                  inset-0 
                  opacity-10 
                  ${benefit.color}
                `}
              />

              {/* Content */}
              <div className="relative p-8 z-10">
                <div className={`
                  mb-6 
                  w-20 
                  h-20 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  ${benefit.color}
                  transition-transform 
                  group-hover:scale-110
                `}>
                  <benefit.icon className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>

                <button 
                  className={`
                    flex 
                    items-center 
                    text-sm 
                    font-semibold 
                    ${benefit.color.replace('bg-', 'text-').replace('text-', 'hover:text-')}
                    hover:translate-x-1 
                    transition-transform
                  `}
                >
                  Learn More 
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;