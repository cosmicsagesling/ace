'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [countryCode, setCountryCode] = useState('+91');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', { ...formData, phone: `${countryCode} ${formData.phone}` });
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="relative bg-gray-50 min-h-screen md:p-10">
      <div className='z-0 absolute w-20 h-20 bg-blue-100 blur-xl rounded-full top-0'>

      </div>
      {/* Main Content */}
      <main className="z-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              Email, call, or complete the form to learn how ACE can solve your messaging problem.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 font-medium">info@ACE.io</p>
              </div>
              
              <div>
                <p className="text-gray-700 font-medium">321-221-231</p>
              </div>
              
              <div>
                <Link href="/support" className="text-green-600 hover:text-green-800 font-medium underline">
                  Customer Support
                </Link>
                <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-lg mb-2">Customer Support</h3>
                  <p className="text-gray-600">
                    Our support team is available around the clock to address any concerns or queries you may have.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Feedback and Suggestions</h3>
                <p className="text-gray-600">
                  We value your feedback and are continuously working to improve ACE. Your input is crucial in shaping the future of ACE.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Media Inquiries</h3>
                <p className="text-gray-600">
                  For media-related questions or press inquiries, please contact us at media@ACEapp.com.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl ring-1 ring-slate-200 shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600">You can reach us anytime</p>
            </div>
            
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for contacting us! We'll get back to you shortly.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="sr-only">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="sr-only">Your email</label>
                <div className="flex items-center">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="sr-only">Phone number</label>
                <div className="flex">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-3 rounded-l-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+62">+62</option>
                    <option value="+81">+81</option>
                    <option value="+86">+86</option>
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="sr-only">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-600 mb-6">
                <p>
                  By contacting us, you agree to our{' '}
                  <Link href="/terms" className="text-green-600 hover:text-green-800">Terms of service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-green-600 hover:text-green-800">Privacy Policy</Link>
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}