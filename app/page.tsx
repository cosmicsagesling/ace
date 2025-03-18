/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Figtree } from "next/font/google";
import AvatarGroup from "./Components/small/AvatarGroup";

import { BiUserCheck } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { GiGrowth } from "react-icons/gi";
import { SpecialButton } from "./Components/SpecialButton";
import { Check } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TimelineDemo } from "./Components/Timeline";
import ModernCourseCard from "./Components/courseCard";

const figtree = Figtree({
  subsets: ["latin"],
});


const Course = [
  {
    id: 1,
    course_title: "IELTS Mastery Program",
    description: "Achieve your dream IELTS score with expert coaching, real-test simulations, and personalized feedback.",
    timeline: "24 Days",
    count: "3k+ Students",
    overall_price: 99.00,
    discount_price: 49.00,
    category: "English Proficiency",
    ratings: 4.9,
    status: "Featured"
  },
  {
    id: 2,
    course_title: "PTE Success Program",
    description: "Boost your PTE score with AI-driven practice, live training, and advanced test strategies.",
    timeline: "20 Days",
    count: "2.8k Students",
    overall_price: 99.00,
    discount_price: 45.00,
    category: "English Proficiency",
    ratings: 4.8,
    status: "Featured"
  },
  {
    id: 3,
    course_title: "TOEFL Exam Prep",
    description: "Comprehensive TOEFL training to improve academic English skills for university admissions.",
    timeline: "25 Days",
    count: "2k+ Students",
    overall_price: 89.00,
    discount_price: 44.00,
    category: "English Proficiency",
    ratings: 4.7,
    status: "Popular"
  },
  {
    id: 4,
    course_title: "OET Training for Healthcare Professionals",
    description: "Specialized OET coaching for medical professionals looking to work or study abroad.",
    timeline: "30 Days",
    count: "1.5k Students",
    overall_price: 109.00,
    discount_price: 55.00,
    category: "English Proficiency",
    ratings: 4.8,
    status: "Featured"
  },
  {
    id: 5,
    course_title: "Advanced Business English",
    description: "Enhance your communication skills with business-focused English training for professional growth.",
    timeline: "30 Days",
    count: "1.5k Students",
    overall_price: 79.00,
    discount_price: 39.00,
    category: "Communication Mastery",
    ratings: 4.7,
    status: "Popular"
  },
  {
    id: 6,
    course_title: "Verbal Communication & Public Speaking",
    description: "Master verbal fluency, storytelling, and presentation skills to boost confidence in public speaking.",
    timeline: "21 Days",
    count: "1.8k Students",
    overall_price: 69.00,
    discount_price: 35.00,
    category: "Soft Skills",
    ratings: 4.8,
    status: "New"
  },
  {
    id: 7,
    course_title: "French for Beginners",
    description: "Master French fundamentals and build fluency with native-level training.",
    timeline: "45 Days",
    count: "1.2k Students",
    overall_price: 120.00,
    discount_price: 60.00,
    category: "Foreign Language Training",
    ratings: 4.8,
    status: "New"
  }
];


const page = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero section */}
      <section className="overflow-hidden relative max-md:h-full max-md:py-32 h-[90dvh] flex flex-col gap-4 items-center justify-center w-full bg-gradient-to-t from-green-200 via-white to-white ">
        <AvatarGroup />
        <div className="flex flex-col gap-2">
          <h1
          data-aos="zoom-in" data-aos-delay="100"
            className={`z-50 max-md:hidden ${figtree.className} text-center font-semibold text-5xl max-md:text-xl text-black md:leading-16`}
          >
            Unlocking Global Opportunities with A.C.E <br /> - Tailored Training
            Solution -
          </h1>
          <h2 className="z-50 block md:hidden text-center text-3xl font-semibold leading-snug">
            Global Opportunities with A.C.E <br />  <span className="text-2xl font-medium bg-gradient-to-b from-black to-gray-500 text-transparent bg-clip-text">Tailored Training Solutions</span>
          </h2>
          <p data-aos="zoom-in" data-aos-delay="200" className="text-gray-500 text-center max-md:text-sm">
            Dive into the world of unlocking the global opportunities <br />
            the second line of the desc goes here
          </p>
        </div>
        {/* <a className="z-20 max-md:text-sm cursor-pointer bg-black text-white px-8 py-2 rounded-full font-semibold hover:translate-y-1 transition-all hover:bg-gray-700">
          Get Started
          </a> */}
        <SpecialButton  />
        <RetroGrid />
        <div>
          <img
            src="/Frame 576.svg"
            alt=""
            className="absolute top-10 right-10 size-15 z-99 text-white "
          />
          <img
            src="/dot.svg"
            alt=""
            className="absolute bottom-0 left-10 size-15"
          />
        </div>
        <div className="max-md:overflow-hidden">
          <img
            draggable="false"
            src="/bg-arrow.svg"
            alt=""
            className="absolute -top-2 max-md:-top-20 right-0 md:h-full max-md:size-56 w-fit z-0"
          />
          <img
            draggable="false"
            src="/bg-arrow.svg"
            alt=""
            className=" absolute md:-bottom-86 max-md:-bottom-10 left-0 rotate-180 md:h-full max-md:size-56 w-fit z-0"
          />
        </div>
      </section>

      {/* the seperator */}

      <div className="h-[15dvh] w-full bg-gradient-to-t from-white to-green-200" />

      {/* second sections */}

      <section className="w-full mt-10 px-4 h-full">
        <div className="flex flex-col gap-3 items-center">
          <p className="text-green-800 max-md:text-sm">
            The <b>Trust</b> Students Keep on Us
          </p>
          <h2 className="font-semibold text-5xl max-md:text-3xl">
            Why Choose Us !
          </h2>
        </div>
        <div className="mt-10 mx-auto grid md:grid-cols-3 gap-4 max-w-[1400px]">
          <div className=" border-b-2 border-b-red-400 shadow-md shadow-red-300 w-full h-fit ring-1 ring-slate-200 flex flex-col gap-5 p-6 rounded-md">
            <div className="w-10 h-10 rounded-xl">
              <SlCalender className="w-8 h-8 text-red-500" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">Flexible Scheduling</h3>
              <p className="text-slate-500">
                Customizable sessions designed to fit your busy lifestyle.
              </p>
            </div>
          </div>
          <div className="border-b-2 border-b-green-400 shadow-md shadow-green-300 w-full h-full ring-1 ring-slate-200 flex flex-col gap-5 p-6 rounded-md">
            <div className="w-20 h-20 rounded-xl flex items-center justify-center">
              <BiUserCheck className="w-16 h-16 text-green-700" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">Expert Guidance</h3>
              <p className="text-slate-500">
                Tailored guidance from certified trainers with decades of
                experience and a proven track record of success.
              </p>
            </div>
          </div>
          <div className="border-b-2 border-b-blue-500 shadow-md shadow-blue-400 w-full h-fit ring-1 ring-slate-200 flex flex-col gap-5 p-6 rounded-md">
            <div className="w-10 h-10 bg-white rounded-xl">
              <GiGrowth className="w-9 h-9 text-blue-600" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">Guaranteed Growth</h3>
              <p className="text-slate-500">
                A supportive community that drives progress and ensures score
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 p-5 lg:p-10">
        {/* wrapper */}
        <div className=" w-full flex items-center max-md:flex-col gap-16">
          {/* firstbox */}

          <div className="relative md:w-1/2 ">
            <p
              data-aos="zoom-in"
              className="absolute right-0 bottom-1/2 bg-white/40 backdrop-blur-xl rounded-full px-4 py-2  text-black text-center"
            >
              🚀 Your #1 Destination <br /> for Global Learning
            </p>
            <p
              data-aos="zoom-out"
              className="absolute left-0 top-1/2 bg-white/40 backdrop-blur-xl rounded-full px-4 py-2  text-black text-center"
            >
              📈 Trusted by thousands. <br /> Built for your success.
            </p>

            <img
              className="rounded-t-full"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {/* second box */}
          <div className="md:w-1/2 flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <p>Who and What ?</p>
              <h1 className="font-semibold text-5xl max-md:text-3xl border-b-2 pb-3">
                Meet A.C.E
              </h1>
            </div>

            <div>
              <p className="text-slate-600 max-md:text-sm">
                We craft personalized training programs to{" "}
                <b>bridge the gap </b> between education and real-world entities
                . With elite trainers,
                <b>AI-powered learning</b> , and flexible models, we ensure{" "}
                <b>100% success</b>
                -driven outcomes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">📚 About The A.C.E.</p>
              <p className="text-slate-600 max-md:text-sm">
                As the prestigious training division of AMOS Global Solutions,
                we empower learners with world-class education, cutting-edge
                methodologies, and a global network for unparalleled career
                growth.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mt-5">
              {[
                {
                  title: "Elite Trainers",
                  content:
                    "Experts who have trained 10,000+ students globally.",
                },
                {
                  title: "Smart Learning",
                  content: "AI-powered assessments & interactive experiences.",
                },
                {
                  title: "Flexible Models",
                  content: " Online, in-person, and hybrid options.",
                },
              ].map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="bg-green-500 p-2 max-md:p-1.5 rounded-full">
                      <Check className="text-white size-4 max-md:size-3" />
                    </div>
                    <p>
                      {" "}
                      <span className="font-medium">{item.title}</span> -{" "}
                      {item.content}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* wrapperend */}
      </section>


      <section  className="p-10">

        <ModernCourseCard courses={Course}/>
      </section>


<TimelineDemo/>



      <section className="mt-10 p-5 lg:p-10">
        <div className="flex h-full max-md:flex-col max-md:items-start items-center max-md:gap-4 justify-between">
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex flex-col gap-2">
              <p className="text-green-800">Our Promise</p>
              <h1 className="text-5xl max-md:text-3xl font-semibold">
                We don’t just prepare <br /> you for exams
              </h1>
            </div>
            <div>
              <p className="text-slate-500 max-md:text-sm">
                We go beyond just helping you pass exams—we equip you with the
                knowledge, skills, and confidence needed to excel in your career
                and life.
              </p>
              <p className="text-slate-500 max-md:text-sm mt-2">
                Our approach focuses on practical learning, critical thinking,
                and real-world applications, ensuring that you are prepared not
                just for tests, but for a successful and fulfilling future.
              </p>
            </div>
            <form
              action=""
              className="flex items-center ring-1 ring-slate-200 w-fit rounded-xl overflow-hidden"
            >
              <input
                type="text"
                placeholder="(+91) Enter your Mobile Number "
                className="md:px-5 max-md:pl-3 w-full outline-none max-md:text-sm"
                required
              />
              <button className="bg-green-900 text-white px-4 py-2 max-md:text-sm">
                Claim Free Consultancy
              </button>
            </form>
          </div>

          <div className="relative md:w-md w-full h-fit rounded-bl-full ">
            <img
              src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover md:w-full h-full rounded-bl-full"
            />
            <div className=" absolute bottom-10 -left-10 max-md:left-0 ring-1 ring-slate-300 text-black bg-white px-4 py-2 rounded-full  ">
              <img src="/AI.png" alt="" />
              <p>Commited to serve Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
