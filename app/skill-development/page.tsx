import React from 'react'
import SkillHeroSection from '../Components/Skills/hero'
import SkillDevelopmentSection from '../Components/Skills/features'
import LearningMethodSection from '../Components/Skills/bonus'
import { Metadata } from 'next';
import { CourseSchemaMarkup } from '../Components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Advanced Skills Training | Communication & Leadership Development',
  description: 'Upgrade your professional skills with A.C.E.\'s advanced training programs. Master communication, leadership, global business skills, and creative thinking for career advancement.',
  alternates: {
    canonical: '/skill-development',
  },
  openGraph: {
    url: '/skill-development',
    title: 'Advanced Skills Training | Professional Development | A.C.E.',
    description: 'Upgrade your professional skills with A.C.E.\'s advanced training programs. Master communication, leadership, and creative thinking.',
    images: [
      {
        url: 'https://ace-omega-murex.vercel.app/seo/skill.png',
        width: 1200,
        height: 630,
        alt: 'Professional Skills Training at A.C.E.',
      },
    ],
  },
};

const page = () => {
  return (
    <main>
       <CourseSchemaMarkup 
        course={{
          name: 'Advanced Professional Skills Training',
          description: 'Comprehensive professional development program focusing on communication mastery, leadership skills, global business competencies, and creative thinking.',
          provider: 'A.C.E. - AMOS Centre of Excellence',
          url: 'https://yourdomain.com/skill-development',
        }} 
      />

      <section>
        <SkillHeroSection/>
      </section>

      <section>
      <SkillDevelopmentSection/>
      </section>

      <section id='lms'>
      <LearningMethodSection/>
      </section>
      
    </main>
  )
}

export default page