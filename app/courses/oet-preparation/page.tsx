import CourseFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'
import CourseHeroSection from '@/app/Components/Courses/ielts/sections/hero'
import React from 'react'

const page = () => {
  return (
    <main>

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