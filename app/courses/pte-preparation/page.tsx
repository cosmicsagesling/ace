import CourseFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'
import CourseHeroSection from '@/app/Components/Courses/ielts/sections/hero'
import { CourseSchemaMarkup } from '@/app/Components/SchemaMarkup';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'PTE Academic Preparation | Computer-Based English Test Training',
  description: 'Master the PTE Academic exam with A.C.E.\'s specialized coaching. AI-powered practice tests, expert strategies, and personalized feedback for high scores. Join our 95%+ success rate.',
  alternates: {
    canonical: '/courses/pte-preparation',
  },
  openGraph: {
    url: '/courses/pte-preparation',
    title: 'PTE Academic Preparation | A.C.E.',
    description: 'Master the PTE Academic exam with A.C.E.\'s specialized coaching. AI-powered practice tests and expert strategies.',
    images: [
      {
        url: 'https://ace-omega-murex.vercel.app/seo/pte.png',
        width: 1200,
        height: 630,
        alt: 'PTE Training at A.C.E.',
      },
    ],
  },
};

const page = () => {
  return (
    <main>
<CourseSchemaMarkup 
        course={{
          name: 'PTE Academic Preparation Course',
          description: 'Comprehensive PTE Academic training program with AI-powered practice tests and personalized feedback for score improvement.',
          provider: 'A.C.E. - AMOS Centre of Excellence',
          url: 'https://theacetraining.com/courses/pte-preparation',
        }} 
      />
        <section>
            <CourseHeroSection title="PTE"/>
        </section>

        
        <section>
            <CourseFeatures title="PTE"/>
        </section>

        <section>
            <BlogLinksSection title="PTE"/>
        </section>

    </main>
  )
}

export default page