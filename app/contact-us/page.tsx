import React from 'react'
import ContactSection from '../Components/contact'
import LocationSection from '../Components/map'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact A.C.E. Training Centre | Get in Touch With Our Experts',
  description: 'Connect with A.C.E. - AMOS Centre of Excellence for all your language training needs. Book a consultation, visit our centre, or speak with our expert trainers about IELTS, PTE, OET & TOEFL.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    url: '/contact-us',
    title: 'Contact A.C.E. Training Centre | Get Expert Help',
    description: 'Connect with A.C.E. for all your language training needs. Book a consultation or speak with our expert trainers.',
  },
};

const page = () => {
  return (
    <main>
      <ContactSection/>
      <LocationSection/>
    </main>
  )
}

export default page