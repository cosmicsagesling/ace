import React from 'react'
import SkillHeroSection from '../Components/Skills/hero'
import SkillDevelopmentSection from '../Components/Skills/features'
import LearningMethodSection from '../Components/Skills/bonus'
const page = () => {
  return (
    <main>

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