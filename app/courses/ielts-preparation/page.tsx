import React from 'react'
import CourseFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'
import CourseHeroSection from '@/app/Components/Courses/ielts/sections/hero'
import { Metadata } from 'next';
import { CourseSchemaMarkup } from '@/app/Components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'IELTS Preparation & Coaching | Guaranteed Band Score Improvement',
  description: 'Achieve your target IELTS band score with A.C.E.\'s expert coaching. Comprehensive training for all modules - Listening, Reading, Writing & Speaking. 95%+ success rate.',
  alternates: {
    canonical: '/courses/ielts-preparation',
  },
  openGraph: {
    url: '/courses/ielts-preparation',
    title: 'IELTS Preparation & Coaching | A.C.E.',
    description: 'Achieve your target IELTS band score with A.C.E.\'s expert coaching. Comprehensive training for all modules.',
    images: [
      {
        url: '/images/ielts-training.jpg',
        width: 1200,
        height: 630,
        alt: 'IELTS Training at A.C.E.',
      },
    ],
  },
};
const page = () => {
  return (
    <main>
         <CourseSchemaMarkup 
        course={{
          name: 'IELTS Preparation Course',
          description: 'Comprehensive IELTS training program covering all modules with proven strategies for band score improvement.',
          provider: 'A.C.E. - AMOS Centre of Excellence',
          url: 'https://theacetraining.com/courses/ielts-preparation',
        }} 
      />

        <section>
            <CourseHeroSection title='IELTS'/>
        </section>

        <section>
            <CourseFeatures title="IELTS"/>
        </section>

        <section>
            <BlogLinksSection title='IELTS'/>
        </section>
    </main>
  )
}

export default page
