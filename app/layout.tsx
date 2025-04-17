import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import AOSInit from "./Components/AOS";
import ImprovedCTA from "./Components/CTA";
import AccordionDemo from "./Components/faq";

import Nala from "./Components/LiveChat";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | A.C.E. - AMOS Centre of Excellence',
    default: 'A.C.E. - Premier IELTS, PTE, OET & TOEFL Training Centre',
  },
  description: 'Achieve your dream scores with A.C.E. - expert coaching for IELTS, PTE, OET & TOEFL exams. Tailored programs, certified trainers & proven results for study abroad success.',
  keywords: [
    'IELTS preparation', 
    'PTE coaching', 
    'OET training', 
    'TOEFL classes', 
    'English proficiency', 
    'study abroad', 
    'exam preparation', 
    'language training',
    'A.C.E.',
    'AMOS Centre of Excellence'
  ],
  metadataBase: new URL('https://theacetraining.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://theacetraining.com',
    siteName: 'A.C.E. - AMOS Centre of Excellence',
    images: [
      {
        url: 'http://theacemastery.vercel.app/ace%20logo.svg',
        width: 1200,
        height: 630,
        alt: 'A.C.E. Training Centre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@acetrainingcentre',
    creator: '@acetrainingcentre',
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        <Banner />
        <Navbar />
        {children}
        <Nala />
      <AccordionDemo/>

<ImprovedCTA/>
        <Footer/>
      </body>
    </html>
  );
}
