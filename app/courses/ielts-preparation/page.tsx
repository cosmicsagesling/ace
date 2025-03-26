import React from 'react'
import CourseFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'
import CourseHeroSection from '@/app/Components/Courses/ielts/sections/hero'


const page = () => {
  return (
    <main>

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
