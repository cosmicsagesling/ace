import React from 'react';
import { 
  Headphones, 
  Brain, 
  BookOpenCheck, 
  Target, 
  FileText, 
  MessageCircle, 
  CalendarSearch
} from 'lucide-react';
import { Figtree } from 'next/font/google';


const figtree = Figtree({
    subsets : ['latin']
})

const IELTSFeatures = () => {
  const features = [
    {
      icon: Headphones,
      title: 'Live Sessions + Recordings',
      description: 'Attend real-time classes or catch up at your pace.',
      iconColor: 'text-blue-500',
      gridClass: 'md:col-span-2 lg:col-span-1'
    },
    {
      icon: Brain,
      title: 'Grammar & Vocabulary Boosters',
      description: 'Structured modules to strengthen the foundation.',
      iconColor: 'text-green-500',
      gridClass: 'md:col-span-2 lg:col-span-1'
    },
    {
      icon: BookOpenCheck,
      title: 'Writing & Speaking Feedback',
      description: 'Get personalized trainer feedback to refine skills.',
      iconColor: 'text-purple-500',
      gridClass: 'md:col-span-3 lg:col-span-2 row-span-2'
    },
    {
      icon: Target,
      title: 'Band Score Tracker',
      description: 'Progress tracking to visualize your improvement.',
      iconColor: 'text-red-500',
      gridClass: 'md:col-span-2 lg:col-span-1'
    },
    {
      icon: FileText,
      title: 'Study Materials & Practice Sets',
      description: 'Model answers, test samples, and checklists included.',
      iconColor: 'text-orange-500',
      gridClass: 'md:col-span-2 lg:col-span-1 row-span-1'
    },
    {
      icon: MessageCircle,
      title: 'Doubt-Solving & Strategy Sessions',
      description: '1:1 trainer support to unblock your weak areas.',
      iconColor: 'text-teal-500',
      gridClass: 'md:col-span-3 lg:col-span-2'
    },
    {
        icon: CalendarSearch,
        title: 'Flexible Class Schedules',
        description: 'Learn at your convenience with weekday and weekend batches available.',
        iconColor: 'text-teal-500',
        gridClass: 'md:col-span-3 lg:col-span-2'
      }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={` ${figtree.className} text-3xl font-extrabold text-gray-900 sm:text-4xl`}>
            What You Get with Our IELTS Program
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            More than just classes – we equip you with the tools, tips, and personal guidance to ace the exam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${feature.gridClass}`}
            >
              <div className={`mb-4 ${feature.iconColor}`}>
                <feature.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IELTSFeatures;