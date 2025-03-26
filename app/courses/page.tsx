import React from 'react'
import IELTSTrainingCarousel from '../Components/Courses/Sections/carousel'
import BenefitsSection from '../Components/Courses/Sections/Benefits'

const page = () => {
  return (
    <main>
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