/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from 'react'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })
import { useState } from 'react'
import { Sparkle } from 'lucide-react'



const ClaimSection = () => {

const [formData,setFormData] = useState({
  phone:""
})

const [isLoading, setLoading] = useState(false)
const [isSubmitted , setSubmitted] = useState(false)

const handleSubmit = async (e: React.FormEvent) =>{
  e.preventDefault();
    try {
      setLoading(true)
        const res = await fetch("/api/submitForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })

          if(res.ok){
            setSubmitted(true)
          }
        
    } catch (error) {
        console.log(error);
    
    }
    finally{
      setLoading(false)
    }
}



  return (
    <section className="mt-10 p-5 lg:p-10">
        <div className="flex h-full max-md:flex-col max-md:items-start items-center max-md:gap-4 justify-between">
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex flex-col gap-2">
              <p data-aos="fade-up" className="text-green-800">Our Promise</p>
              <h2 data-aos="fade-up" data-aos-delay="200" className={`${figtree.className} text-5xl max-md:text-3xl font-semibold`}>
                We don’t just prepare <br /> you for exams
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
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
            <form data-aos="fade-up" data-aos-delay="400" onSubmit={handleSubmit}
              action=""
              className="flex items-center ring-1 ring-slate-200 w-fit rounded-xl overflow-hidden"
            >
              <input
               onChange={(e)=>{
                const {name,value} = e.target;
                setFormData((prev)=>({...prev,[name]:value}))}}
               value={formData.phone}
                type="number"
                name='phone'
                placeholder={isLoading ? 'You are a step away !' : "(+91) Enter your Mobile Number "}
                className="md:px-5 max-md:pl-3 w-full outline-none max-md:text-sm"
                required
              />
              <button type='submit' className="cursor-pointer bg-green-900 text-white px-4 py-2 max-md:text-sm">
                {isSubmitted ? "Submitted" : ( isLoading ? 'Claiming..' : 'Claim Free Consultancy' ) }
              </button>
            </form>
          </div>

          <div className="relative md:w-md w-full h-fit rounded-bl-full ">
            <img
              src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="excellence"
              className="object-cover md:w-full h-full rounded-bl-full"
            />
            <div data-aos="zoom-in"  className=" absolute bottom-10 -left-10 max-md:left-0 ring-1 ring-slate-300 text-black bg-white px-4 py-2 rounded-full  ">
              <Sparkle/>              <p>Committed to serve Excellence</p>
            </div>
          </div>
        </div>
      </section>

  )
}

export default ClaimSection