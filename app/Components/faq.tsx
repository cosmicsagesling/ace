/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Mail } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen } : {question:string, answer:string,isOpen:boolean, toggleOpen:any}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className={`w-full ${isOpen ? 'bg-gradient-to-b from-green-600 to-green-700' : ''} py-5 px-4 flex justify-between items-center text-left focus:outline-none transition-colors duration-300`}
        onClick={toggleOpen}
      >
        <h3 className={`cursor-pointer text-lg font-medium ${isOpen ? 'text-white' : 'text-gray-500'}`}>{question}</h3>
        <Plus 
          className={`text-lime-500 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 text-white' : 'rotate-0'}`} 
          size={24} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-5">
          <p className="text-gray-800 font-semibold">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set the second item open by default

  const faqItems = [
    {
      question: "What types of training programs does A.C.E. offer?",
      answer: "A.C.E. provides training in IELTS, PTE, OET, TOEFL, and Duolingo English Test for study abroad aspirants, along with business communication, public speaking, and foreign language courses like French, German, and Japanese."
    },
    {
      question: "Are the courses available online, or do I need to attend in person?",
      answer: "A.C.E. offers flexible learning models, including online, in-person, and hybrid options to accommodate different preferences and schedules."
    },
    {
      question: "Do I need prior experience to enroll in ?",
      answer: "No, The A.C.E. caters to all skill levels, from beginners to advanced learners, ensuring personalized learning paths for every student."
    },
    {
      question: "What are the benefits of enrolling at The A.C.E.?",
      answer: "Students receive tailored coaching from expert trainers, AI-powered learning tools, real-world simulations, and globally recognized certifications, ensuring career and academic success."
    },
    {
      question: "How can I enroll or get a consultation?",
      answer: "You can sign up for a free consultation or enroll by visiting The A.C.E.’s website, calling their contact number, or visiting their office."
    }
  ];

  const toggleItem = (index:number) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  return (
    <div className=" text-black py-16">
      <div className=" md:px-10 p-5">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-8">
              Frequently Asked<br />Questions
            </h2>
            <p className="text-gray-400 mb-8">
              Find answers to the most common questions about our services and approach.
            </p>
            <form action="" className='flex justify-betweem md:mr-10 ring-1  ring-slate-400 rounded-xl overflow-hidden pl-5 justify-between '>
              <div className='flex items-center gap-4'>
                <Mail/>
              <input type="text" placeholder='Enter your email' className='w-full outline-0' />

              </div>
              <button className='bg-green-700 text-white py-3 px-4 '>Send Query</button>
            </form>
          </div>
          
          <div className="lg:w-2/3 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;