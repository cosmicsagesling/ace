import React from 'react';
import Image from 'next/image';

const LearningMethodSection = () => {
  const sections = [
    {
      id: '01',
      title: 'Personalized Learning Approach',
      backgroundImage: 'https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Customized training to fit your needs.'
    },
    {
      id: '02',
      title: 'Expert-Led Coaching',
      backgroundImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Learn from globally certified trainers.'
    },
    {
      id: '03',
      title: 'Real Test Simulations',
      backgroundImage: 'https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Practice with full-length mock tests.'
    },
    {
      id: '04',
      title: 'Interactive & Engaging Sessions',
      backgroundImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: ' Live classes, discussions, and feedbac'
    }
  ];

  return (
    <section className="w-full flex h-[600px]">
      {sections.map((section) => (
        <div 
          key={section.id}
          className="relative flex-1 group overflow-hidden transition-all duration-500 ease-in-out hover:flex-[3]"
        >
          {/* Background Image */}
          <Image
            src={section.backgroundImage}
            alt={section.title}
            fill
            className="absolute inset-0 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end p-8 h-full text-white">
            {/* Title now always visible */}
            <div className="absolute top-8 left-8">
              <span className="text-4xl font-light text-white/60 mb-2 block">
                {section.id}
              </span>
              <h2 className="text-3xl font-semibold mb-4">
                {section.title}
              </h2>
            </div>

            {/* Hover content */}
            <div className="transform transition-all duration-500 
              translate-y-20 opacity-0 
              group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-white/80 mb-6 max-w-[250px]">
                {section.description}
              </p>
              <button className="px-6 py-3 bg-white/20 hover:bg-white/30 
                text-white rounded-full transition-colors duration-300 
                flex items-center gap-2">
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-8 left-8 w-full h-[2px] bg-white/30 
              origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LearningMethodSection;