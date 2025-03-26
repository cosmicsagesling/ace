import CourseFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'
import CourseHeroSection from '@/app/Components/Courses/ielts/sections/hero'
import React from 'react'

const page = () => {
  return (
    <main>

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