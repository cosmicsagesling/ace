import CourseFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'
import CourseHeroSection from '@/app/Components/Courses/ielts/sections/hero'
import React from 'react'

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