/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react'
import React from 'react'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import {Menu }from 'lucide-react'

const Navbar = () => {

    const [isHovered, setHovered] = useState(false)
    const [isCourse, setisCourse] = useState(false)

    const navItems = [
        { title: "Home", href: "/" },
        {
            title: "Courses", href: "/courses", icon: "AI.png", dropdown: [
                {
                    subTitle: "Heading 1",
                    subLinks: [
                        { title: "Sub Heading 1", href: "/" }
                    ]
                }
            ]
        },
        { title: "Skills", href: "/Skills" },
        { title: "Contact Us", href: "/contact-us" },
    ]

    const pathname = usePathname()

    console.log(pathname);
    

    return (
        <header className='z-100 w-full bg-white/80 backdrop-blur-3xl  px-6 py-2 border-b-2 border-b-slate-300 sticky top-0'>
            <nav className='flex items-center justify-between'>
                
                <img src={"/Ace Logo.jpg"} width={100} height={100} />
                <div className='md:hidden'>
                    <Menu/>
                </div>
                <div className='max-md:hidden flex gap-6 '>
                    <ul className='flex gap-4 items-center  '>

                        {navItems.map((item, index) => {
                            return <li key={index} onMouseEnter={() => { if (item.title == "Courses") { setisCourse(true); setHovered(true) } }} onMouseLeave={() => { if (item.title == "Courses") { setisCourse(false); setHovered(false) } }} className={`cursor-pointer flex items-center gap-2  ${item.href == pathname ? 'text-green-700 font-semibold' : 'text-gray-600 '} hover:text-gray-500 text-sm `}>
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



                    <button className='bg-gradient-to-r px-6 py-1.5 from-[#008A20] to-[#002408] rounded-full text-white h-fit w-fit text-sm'>Register Now</button>


                </div>

            </nav>


        </header>
    )
}

export default Navbar
