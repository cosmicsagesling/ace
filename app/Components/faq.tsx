/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen } : {question:string, answer:string,isOpen:boolean, toggleOpen:any}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className={`w-full ${isOpen ? 'bg-green-500' : ''} py-5 px-4 flex justify-between items-center text-left focus:outline-none transition-colors duration-300`}
        onClick={toggleOpen}
      >
        <h3 className={`cursor-pointer text-lg font-medium ${isOpen ? 'text-white' : ''}`}>{question}</h3>
        <Plus 
          className={`text-lime-500 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 text-white' : 'rotate-0'}`} 
          size={24} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-5">
          <p className="text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1); // Set the second item open by default

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
      question: "Who are the trainers, and what makes them qualified?",
      answer: "We practice proactive communication, personalized attention, and responsive support. Every client is assigned a dedicated account manager who ensures your needs are addressed promptly and that we consistently exceed your expectations."
    },
    {
      question: "What does your commitment to integrity and fairness mean for clients?",
      answer: "It means transparent pricing with no hidden fees, honest communication about project timelines and challenges, and fair treatment of all stakeholders. We prioritize building long-term relationships based on trust rather than short-term gains."
    },
    {
      question: "How do you handle project changes or new directions?",
      answer: "In healthy partnerships, changing directions or launching new projects means combining underlying strengths and capacities with new energy and support. We embrace agility, leveraging our established expertise while bringing fresh perspectives to new challenges."
    }
  ];

  const toggleItem = (index:number) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  return (
    <div className=" text-black py-16">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-8">
              Frequently Asked<br />Questions
            </h2>
            <p className="text-gray-400 mb-8">
              Find answers to the most common questions about our services and approach.
            </p>
          </div>
          
          <div className="lg:w-2/3 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
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