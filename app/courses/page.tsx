import React from 'react'
import IELTSTrainingCarousel from '../Components/Courses/Sections/carousel'
import BenefitsSection from '../Components/Courses/Sections/Benefits'
import { Metadata } from 'next';
import { CourseSchemaMarkup } from '../Components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'TOEFL iBT Preparation | University Admission Test Training',
  description: 'Prepare for TOEFL iBT with A.C.E.\'s comprehensive training. Perfect for university admissions with focused academic English practice. Expert coaches and proven score improvement.',
  alternates: {
    canonical: '/courses/toefl-preparation',
  },
  openGraph: {
    url: 'https://theacetraining.com/courses/toefl-preparation',
    title: 'TOEFL iBT Preparation | University Admission Test Training | A.C.E.',
    description: 'Prepare for TOEFL iBT with A.C.E.\'s comprehensive training. Perfect for university admissions with focused academic English.',
    images: [
      {
        url: 'https://theacetraining.com/seo/courses.png',
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
       <CourseSchemaMarkup 
        course={{
          name: 'TOEFL iBT Preparation Course',
          description: 'Comprehensive TOEFL training program for university admissions with academic English focus and proven score improvement strategies.',
          provider: 'A.C.E. - AMOS Centre of Excellence',
          url: 'https://yourdomain.com/courses/toefl-preparation',
        }} 
      />
      
      <section>
        <IELTSTrainingCarousel/>
      </section>

      <section>
      <BenefitsSection/>
      </section>
    </main>
  )
}

export default page