import CourseFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'
import CourseHeroSection from '@/app/Components/Courses/ielts/sections/hero'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'TOEFL Academic Preparation | Computer-Based English Test Training',
  description: 'Master the TOEFL Academic exam with A.C.E.\'s specialized coaching. AI-powered practice tests, expert strategies, and personalized feedback for high scores. Join our 95%+ success rate.',
  alternates: {
    canonical: '/courses/TOEFL-preparation',
  },
  openGraph: {
    url: '/courses/TOEFL-preparation',
    title: 'TOEFL Academic Preparation | A.C.E.',
    description: 'Master the TOEFL Academic exam with A.C.E.\'s specialized coaching. AI-powered practice tests and expert strategies.',
    images: [
      {
        url: 'https://ace-omega-murex.vercel.app/seo/toefl.png',
        width: 1200,
        height: 630,
        alt: 'TOEFL Training at A.C.E.',
      },
    ],
  },
};

const page = () => {
  return (
    <main>

        <section>
            <CourseHeroSection title="TOEFL"/>
        </section>

        
        <section>
            <CourseFeatures title="TOEFL"/>
        </section>

        <section>
            <BlogLinksSection title="TOEFL"/>
        </section>


    </main>
  )
}

export default page