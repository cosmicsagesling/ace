import React from 'react'
import MultiStepForm from '../Components/reg-now/formpage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register for Expert Training | Start Your Success Journey with A.C.E.',
  description: 'Take the first step towards your language certification success. Register for A.C.E.\'s IELTS, PTE, OET or TOEFL training programs and get a personalized learning plan from expert trainers.',
  alternates: {
    canonical: '/register-now',
  },
  openGraph: {
    url: '/register-now',
    title: 'Register for Expert Training | A.C.E.',
    description: 'Take the first step towards your language certification success. Register for A.C.E.\'s expert training programs.',
    images: [
      {
        url: 'https://ace-omega-murex.vercel.app/seo/reg-now.png',
        width: 1200,
        height: 630,
        alt: 'A.C.E. Training Centre',
      },
    ],
  },
}

const page = () => {
  return (
    <main>
      <StudentEssentialsHeader/>
      <MultiStepForm/>
    </main>
  )
}
const StudentEssentialsHeader: React.FC = () => {
  return (
    <div className="relative bg-white border-b-2 border-b-slate-300">
      {/* Background with curved elements */}
      <div className="absolute top-0 right-0 z-0">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-blue-500">
          <path 
            d="M100 0 Q200 100 100 200 Q0 100 100 0" 
            fill="currentColor" 
            opacity="0.1"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-green-500">
          <path 
            d="M100 0 Q200 100 100 200 Q0 100 100 0" 
            fill="currentColor" 
            opacity="0.1"
          />
        </svg>
      </div>

      {/* Header Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex items-center">
          {/* Text Content */}
          <div className="md:w-1/2 pr-8">
            <div className="text-sm text-gray-500 mb-2">
              The AMOS Center of Excellence.. / Register Now
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Student Essentials
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Get Personalized Free consult from the experts.
            </p>
          </div>

          {/* Destination Dropdown */}
          
        </div>
      </div>
    </div>
  );
};

export default page;
