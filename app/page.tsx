/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Figtree } from "next/font/google";
import AvatarGroup from "./Components/small/AvatarGroup";
import { OrganizationSchemaMarkup } from "./Components/SchemaMarkup";
import { BiUserCheck } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { GiGrowth } from "react-icons/gi";
import { SpecialButton } from "./Components/SpecialButton";
import { BookOpenCheck, Check, Handshake } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TimelineDemo } from "./Components/Timeline";
import { Limelight, Tektur } from "next/font/google";
import { Metadata } from "next";
import ClaimSection from "./Components/ClaimSection";

const figtree = Figtree({
  subsets: ["latin"],
});

const limelight = Limelight({
  subsets: ["latin"],
  weight: "400"
});


const nabla = Tektur({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Premier IELTS, PTE, OET & TOEFL Training Centre',
  description: 'Transform your dreams into reality with A.C.E. - The #1 destination for IELTS, PTE, OET & TOEFL preparation with 95%+ success rate. Certified trainers, flexible schedules & proven results.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    title: 'A.C.E. - AMOS Centre of Excellence | Premier Language Training',
    description: 'Transform your dreams into reality with A.C.E. - The #1 destination for IELTS, PTE, OET & TOEFL preparation with 95%+ success rate.',
    images: [
      {
        url: 'https://ace-omega-murex.vercel.app/singleAce.jpg',
        width: 1200,
        height: 630,
        alt: 'A.C.E. Training Centre',
      },
    ],
  },
};

const page = () => {
  return (
    <main className="overflow-hidden">
      <OrganizationSchemaMarkup />
      {/* Hero section */}
      <section className="overflow-hidden relative max-md:h-full max-md:py-32 h-[90dvh] flex flex-col gap-4 items-center justify-center w-full bg-gradient-to-t from-green-200 via-white to-white ">
        <AvatarGroup />
        <div className="flex flex-col gap-2">
          <h1
            data-aos="zoom-in" data-aos-delay="100"
            className={`z-40 max-md:hidden ${figtree.className} text-center font-semibold text-5xl max-md:text-xl text-black md:leading-16`}
          >
            Unlocking Global Opportunities with A.C.E <br /> - Tailored Training
            Solution -
          </h1>
          <h2
            data-aos="zoom-in" data-aos-delay="100"

            className="z-40 block md:hidden text-center text-3xl font-semibold leading-snug">
            Global Opportunities with A.C.E <br />  <span className="text-2xl font-medium bg-gradient-to-b from-black to-gray-500 text-transparent bg-clip-text">Tailored Training Solutions</span>
          </h2>
          <p data-aos="zoom-in" data-aos-delay="200" className="max-md:hidden text-gray-500 text-center max-md:text-sm">
            Personalized training in English proficiency, communication, <br /> and global skills—designed to help you succeed anywhere in the world.
          </p>
          <p data-aos="zoom-in" data-aos-delay="200" className="md:hidden text-gray-500 text-center max-md:text-sm">Personalized training in English, communication & global<br/> skills  to help you succeed worldwide.</p>
        </div>

        <SpecialButton />
        <RetroGrid />
        <div>
          <img
            src="/Frame 576.svg"
            alt="dotter-pattern2"
            className="absolute top-10 right-10 size-15 z-10 text-white "
          />
          <img
            src="/dot.svg"
            alt="dotted-pattern"
            className="absolute bottom-0 left-10 size-15"
          />
        </div>
        <div className="max-md:overflow-hidden">
          <img
            draggable="false"
            src="/bg-arrow.svg"
            alt="right-arrow"
            className="absolute -top-2 max-md:-top-20 right-0 md:h-full max-md:size-56 w-fit z-0"
          />
          <img
            draggable="false"
            src="/bg-arrow.svg"
            alt="left-arrow"
            className=" absolute md:-bottom-86 max-md:-bottom-10 left-0 rotate-180 md:h-full max-md:size-56 w-fit z-0"
          />
        </div>
      </section>

      {/* the seperator */}

      <div className="h-[15dvh] w-full bg-gradient-to-t from-white to-green-200" />

      {/* second sections */}

      <section className="w-full mt-10 px-4 py-44 h-full">
        <div className="flex flex-col gap-3 items-center">
          <p data-aos="zoom-in" className="text-green-800 max-md:text-sm">
            The <b>Trust</b> Students Keep on Us
          </p>
          <h2 data-aos="zoom-in" data-aos-delay="100" className="font-semibold text-5xl max-md:text-3xl">
            Why Choose Us !
          </h2>
        </div>
        <div className="mt-10 mx-auto grid md:grid-cols-3 gap-4 max-w-[1400px]">
          <div data-aos="fade-right" className=" border-b-2 border-b-red-400 shadow-md shadow-red-300 w-full h-fit ring-1 ring-slate-200 flex flex-col gap-5 p-6 rounded-md">
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
          <div data-aos="fade-up" className="border-b-2 border-b-green-400 shadow-md shadow-green-300 w-full h-full ring-1 ring-slate-200 flex flex-col gap-5 p-6 rounded-md">
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
          <div data-aos="fade-left" className="border-b-2 border-b-blue-500 shadow-md shadow-blue-400 w-full h-fit ring-1 ring-slate-200 flex flex-col gap-5 p-6 rounded-md">
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

      <section className="md:p-20 py-16 px-6 w-full">

<div className="flex flex-col  justify-between gap-10 ">

<div>
<h3 data-aos="fade-right" className={`font-bold max-md:text-3xl text-5xl ${figtree.className} `}>Build Skills That Travels  <br className="md:hidden" /> With You</h3>
<p data-aos="fade-right" data-aos-delay="160" className="mt-5 text-slate-500">From language mastery to professional growth, our training domains are built to support your journey—wherever you aim to go.</p>
</div>
  <div data-aos="fade-up" className="grid md:grid-cols-3 mt-6 ">
    <div className="relative bg-white md:border-r-2 flex flex-col justify-center gap-6 md:p-10 p-6 md:row-span-2 max-md:border-l-2 max-md:border-b-2">
      <div className="absolute w-10 h-10 bg-green-400 layer blur-2xl right-10">

      </div>
      <div className="absolute w-5 h-5 bg-red-600 left-20 max-md:top-10 top-40">

      </div>
      <div className="p-10 w-fit bg-red-200/20 backdrop-blur-xl rounded-full flex items-center justify-center">
        <BookOpenCheck className="size-11 text-orange-800" />
      </div>
      <h2 className="font-semibold text-3xl ">English <span className="bg-clip-text bg-gradient-to-b from-green-600 to-green-700 text-transparent">Proficiency</span>
      </h2>
      <p>
        Master international exams like IELTS, PTE, TOEFL, OET, and Duolingo with expert guidance and real-time simulations
      </p>

    </div>
    <div className="bg-white border-r-2 flex flex-col gap-6 p-10 border-b-2 ">
      <Handshake className="size-11" />
      <h2 className="font-semibold text-3xl "> <span className="bg-clip-text bg-gradient-to-b from-green-600 to-green-700 text-transparent">Professional</span> Communication 
      </h2>
      <p>
      Build confidence in public speaking, presentations, and workplace English with goal-based personalized coaching.

</p>

    </div>
    <div className="bg-white flex flex-col gap-6 p-10 border-b-2 max-md:border-l-2 ">
      <BookOpenCheck className="size-11" />
      <h2 className="font-semibold text-3xl ">Foreign <span className={`${limelight.className} font-semibold bg-clip-text bg-gradient-to-b from-green-600 to-green-700 text-transparent  `}>Languages</span> 
      </h2>
      <p>
      Learn global languages like French, German, and Japanese—enhancing your academic and career opportunities abroad.


</p>

    </div>
    <div className="bg-white  border-r-2 flex flex-col gap-6 p-10 md:col-span-2">
      <BookOpenCheck className="size-11" />
        <h2 className={`font-semibold text-3xl ${nabla.className} `}>Study Abroad  Guidance

      </h2>
      <p>
      Get full support on choosing the right country, course, and university—along with visa assistance and cultural prep.      </p>

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
              data-aos-duration="2000"
              data-aos-delay="120"
              className="absolute right-0 bottom-1/2 bg-white/40 backdrop-blur-xl rounded-full px-4 py-2 max-md:text-sm  text-black text-center"
            >
              🚀 Your #1 Destination <br /> for Global Learning
            </p>
            <p
              data-aos="zoom-out"
              data-aos-duration="2000"
              className="absolute left-0 top-1/2 bg-white/40 backdrop-blur-xl rounded-full px-4 py-2  text-black max-md:text-sm text-center"
            >
              📈 Trusted by thousands. <br /> Built for your success.
            </p>

            <img
              className="rounded-t-full"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="meet-ace"
            />
          </div>

          {/* second box */}
          <div className="md:w-1/2 flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <p data-aos="zoom-out">Who and What ?</p>
              <h3 data-aos="zoom-out" className="font-semibold text-5xl max-md:text-3xl border-b-2 pb-3">
                Meet A.C.E
              </h3>
            </div>

            <div data-aos="fade-up">
              <p  className="text-slate-600 max-md:text-sm">
                We craft personalized training programs to{" "}
                <b>bridge the gap </b> between education and real-world entities
                . With elite trainers,
                <b>AI-powered learning</b> , and flexible models, we ensure{" "}
                <b>100% success</b>
                -driven outcomes.
              </p>
            </div>

            <div data-aos="fade-up" className="flex flex-col gap-2">
              <p className="font-semibold">📚 About The A.C.E.</p>
              <p className="text-slate-600 max-md:text-sm">
                As the prestigious training division of AMOS Global Solutions,
                we empower learners with world-class education, cutting-edge
                methodologies, and a global network for unparalleled career
                growth.
              </p>
            </div>

            <ul data-aos="fade-up" data-aos-delay="200" className="flex flex-col gap-3 mt-5">
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


      

      <TimelineDemo />

      <ClaimSection/>
      <section id="testimonials">
      </section>
    </main>
  );
};

export default page;
