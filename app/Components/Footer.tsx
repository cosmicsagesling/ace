import React from 'react';
import Image from 'next/image';
import { Heart, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001205] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <a href='https://theacetraining.com' className="text-2xl font-bold mb-2">
              <Image src="/Ace Logo White.png" alt="ace logo"  width={150} height={150} />
              </a>
              <p className="text-gray-400">Unlocking Global Opportunities with A.C.E , Your Partner</p>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/amosglobalsolutions/" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/amosglobal_edu/" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/amos-global-solutions-limited" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@AmosGlobalSolutions" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition duration-300">
                <Youtube size={20} />
              </a>
            </div>
            <div>
              <div className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300">
                <a href='https://amosglobalsolutions.com' target='_blank' className="mr-2">www.amosglobalsolutions.com</a>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg border-l-4 border-blue-500 pl-3 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Courses', 'Skills', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center">
                    <span className="mr-2 text-xs">■</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="font-semibold text-lg border-l-4 border-green-500 pl-3 mb-6">Courses</h3>
            <ul className="space-y-3">
              {[
                'IELTS Training',
                'PTE Training',
                'TOEFL Training',
                'OET Training',
                'Soft Skills',
                'Duolingo English Test',
                'Regional Language Training',
              ].map((course) => (
                <li key={course}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center">
                    <span className="mr-2 text-xs">■</span> {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg border-l-4 border-purple-500 pl-3 mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-purple-400" size={18} />
                <span className="text-gray-400">124 City Road, London, <br /> EC1V 2NX

</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-purple-400" size={18} />
                <a href="tel:+44 78 5781 8924 " className="text-gray-400 hover:text-white">+44 78 5781 8924 / +44 73 9260 0443</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-purple-400" size={18} />
                <a href="mailto:info@yourbrand.com" className="text-gray-400 hover:text-white">info@theacetraining.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Subscribe to newsletter"
                  className="bg-gray-200 text-black px-4 py-2 flex-grow text-sm rounded-l"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AMOS Center of Excellence™ All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-200 hover:text-gray-500 text-sm">Terms of Service</a>
              <a href="/privacy-policy" className="text-gray-200 hover:text-gray-500 text-sm">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-600">
            <a href='https://pearltechsolutions.in' className='text-white'>Made with <Heart size={12} className="inline text-red-500" />  by  <b className='bg-clip-text text-transparent bg-gradient-to-bl from-amber-600 to-red-800'>Pearl Tech Solutions</b> </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;