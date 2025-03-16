'use client'; // Important for Next.js 15

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      // Your configuration options here
      duration: 1250,
      easing: 'ease-in-out-cubic',
      once: true,
    });
  }, []);
  
  return null; // This component doesn't render anything
}