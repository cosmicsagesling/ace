"use client"
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {

    const [isHovered, setHovered] = useState(false)
    const [isActive, setisActive] = useState("Home")
    const [isCourse, setisCourse] = useState(false)

    const navItems = [
        { title: "Home", href: "/" },
        {
            title: "Courses", href: "/", icon: "AI.png", dropdown: [
                {
                    subTitle: "Heading 1",
                    subLinks: [
                        { title: "Sub Heading 1", href: "/" }
                    ]
                }
            ]
        },
        { title: "Skill Management", href: "/" },
        { title: "Contact Us", href: "/" },
    ]


    return (
        <header className='z-100 w-full bg-white/80 backdrop-blur-3xl  px-6 py-2 border-b-2 border-b-slate-300 sticky top-0'>
            <nav className='flex items-center justify-between'>
                <img src={"/Logo.png"} />
                <div className='flex gap-6 '>
                    <ul className='flex gap-4 items-center  '>

                        {navItems.map((item, index) => {
                            return <li key={index} onMouseEnter={() => { if (item.title == "Courses") { setisCourse(true); setHovered(true) } }} onMouseLeave={() => { if (item.title == "Courses") { setisCourse(false); setHovered(false) } }} className={`cursor-pointer flex items-center gap-2  ${isActive == item.title ? 'text-green-700 font-semibold' : 'text-gray-600 '} hover:text-gray-500 text-sm `}>
                                {item?.icon && <><img src="/ai.png" alt="" className='w-5 h-5' /></>}
                                <a href={item.href}>{item.title}</a>
                                {item.dropdown && <ChevronDown className={`transition-all ${isHovered && 'rotate-180'} w-4 h-4`} />}
                            </li>
                        })}


                        {
        
                            <div
                            onMouseEnter={()=> setisCourse(true)}
                            onMouseLeave={()=> setisCourse(false)}
                            className={`ml-13 ${isCourse ? 'translate-y-0 opacity-100 visible' : '-translate-y-1 opacity-0 invisible'} transition-all duration-500 absolute w-96 h-96 top-22 bg-white ring-1 ring-slate-300 rounded-md p-6`}>
                                <h1 className='font-semibold text-xl'>Course Dropdown</h1>
                            </div>
                        }

                    </ul>



                    <button className='bg-gradient-to-r px-6 py-1.5 from-[#008A20] to-[#002408] rounded-full text-white h-fit w-fit'>Register Now</button>


                </div>

            </nav>


        </header>
    )
}

export default Navbar
