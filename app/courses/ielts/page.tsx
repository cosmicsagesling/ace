import React from 'react'
import IELTSHeroSection from '@/app/Components/Courses/ielts/sections/hero'
import IELTSFeatures from '@/app/Components/Courses/ielts/sections/Benefits'
import BlogLinksSection from '@/app/Components/Courses/ielts/sections/blog'

const page = () => {
  return (
    <main>

        <section>
            <IELTSHeroSection/>
        </section>

        <section>
            <IELTSFeatures/>
        </section>

        <section>
            <BlogLinksSection/>
        </section>
    </main>
  )
}

export default page
