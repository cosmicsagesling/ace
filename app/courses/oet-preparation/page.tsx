import CourseFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'
import CourseHeroSection from '@/app/Components/Courses/ielts/sections/hero'
import { CourseSchemaMarkup } from '@/app/Components/SchemaMarkup';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'OET Preparation for Healthcare Professionals | Medical English Training',
  description: 'Specialized OET training for nurses, doctors and healthcare professionals. Master medical English with A.C.E.\'s expert coaches. Industry-specific scenarios and guaranteed results.',
  alternates: {
    canonical: '/courses/oet-preparation',
  },
  openGraph: {
    url: 'https://theacetraining.com/courses/oet-preparation',
    title: 'OET Preparation for Healthcare Professionals | A.C.E.',
    description: 'Specialized OET training for nurses, doctors and healthcare professionals. Master medical English with expert coaches.',
    images: [
      {
        url: 'https://theacetraining.com/seo/oet.png',
        width: 1200,
        height: 630,
        alt: 'OET Training at A.C.E.',
      },
    ],
  },
};


const page = () => {
  return (
    <main>
  <CourseSchemaMarkup 
        course={{
          name: 'OET Preparation for Healthcare Professionals',
          description: 'Specialized OET training program for healthcare workers with medical English focus and industry-specific scenarios.',
          provider: 'A.C.E. - AMOS Centre of Excellence',
          url: 'https://yourdomain.com/courses/oet-preparation',
        }} 
      />
        <section>
            <CourseHeroSection title="OET"/>
        </section>

        
        <section>
            <CourseFeatures title="OET"/>
        </section>

        <section>
            <BlogLinksSection title="OET"/>
        </section>


    </main>
  )
}

export default page