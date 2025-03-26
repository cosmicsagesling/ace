"use client";
import { useState, useEffect } from "react";
import React from "react";
import { ChevronDown, ChevronRight, Info, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Figtree } from "next/font/google";
import Link from "next/link";

const figtree = Figtree({
  subsets: ["latin"],
});

const Navbar = () => {
  const [isHovered, setHovered] = useState(false);
  const [isCourse, setisCourse] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCourseOpen, setIsMobileCourseOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Courses",
      href: "/courses",
      icon: "AI.png",
      dropdown: [
        {
          subTitle: "IELTS Preparation",
          href:"/courses/ielts-preparation",
          logo: "/ielts_logo.png"
        },
        {
          subTitle: "PTE Preparation",
          href:"/courses/pte-preparation",
          logo: "/images.png"
        },
        {
          subTitle: "TOEFL Preparation",
          href:"/courses/toefl-preparation",
          logo: "https://www.ets.org/content/dam/ets-org/Rebrand/Logos/toefl-logo-periwinkle.svg"
        },
        {
          subTitle: "OET Preparation",
          href:"/courses/oet-preparation",
          logo: "https://5.imimg.com/data5/ER/ZJ/SI/SELLER-13256372/oet-coaching-servoc-500x500.png"
        },
      ],
    },
    { title: "Skills", href: "/Skills" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const pathname = usePathname();

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    setIsClient(true);

    const handleOverflow = () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
      }
    };

    handleOverflow();

    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = "auto";
      }
    };
  }, [isMobileMenuOpen]);

  // Prevent rendering of mobile-specific elements during SSR
  if (!isClient) {
    return (
      <header className="box-border z-50 w-full bg-white backdrop-blur-3xl px-6 py-2 border-b-2 border-b-slate-200 sticky top-0">
        <nav className="flex items-center justify-between">
          <img alt="Ace Logo" src={"/Ace Logo.jpg"} width={100} height={100} />
        </nav>
      </header>
    );
  }

  return (
    <header className="box-border z-50 w-full bg-white backdrop-blur-3xl px-6 py-2 border-b-2 border-b-slate-200 sticky top-0">
      <nav className="flex items-center justify-between">
        <img alt="Ace Logo" src={"/Ace Logo.jpg"} width={100} height={100} />

        {/* Mobile Menu Trigger */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu />
        </div>

        {/* Desktop Menu */}
        <div className="max-md:hidden flex gap-6">
          <ul className={`${figtree.className} flex gap-4 items-center`}>
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  onMouseEnter={() => {
                    if (item.title === "Courses") {
                      setisCourse(true);
                      setHovered(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.title === "Courses") {
                      setisCourse(false);
                      setHovered(false);
                    }
                  }}
                  className={`cursor-pointer flex items-center gap-2 ${
                    item.href === pathname
                      ? "text-green-700 font-semibold"
                      : "text-gray-600"
                  } hover:text-green-500 text-sm`}
                >
                  {item.icon && (
                    <Image 
                      src="/ai.png" 
                      alt="AI Icon" 
                      width={20} 
                      height={20} 
                      className="w-5 h-5" 
                    />
                  )}
                  <a href={item.href}>{item.title}</a>
                  {item.dropdown && (
                    <ChevronDown
                      className={`transition-all ${
                        isHovered ? "rotate-180" : ""
                      } w-4 h-4`}
                    />
                  )}
                </li>
              );
            })}

            {/* Course Dropdown */}
            <div
              onMouseEnter={() => setisCourse(true)}
              onMouseLeave={() => setisCourse(false)}
              className={`ml-13 ${
                isCourse
                  ? "translate-y-0 opacity-100 visible"
                  : "-translate-y-1 opacity-0 invisible"
              } transition-all duration-500 absolute w-96 h-96 space-y-5 top-22 bg-white ring-1 ring-slate-300 rounded-md p-6 shadow-lg`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-xl">Courses Offered</h1>
                <div className="flex items-center gap-3">
                  <Info className="text-slate-500" />
                  <p className="text-slate-500">
                    Select any of the courses to know more.
                  </p>
                </div>
              </div>

              <div>
                {navItems.find(item => item.title === "Courses")?.dropdown?.map((course, index) => (
                  <Link
                    key={index}
                    href={course.href}
                    className="w-full cursor-pointer hover:bg-gray-100 flex items-center justify-between mt-2 px-4 py-1 rounded-sm ring-1 ring-slate-200"
                  >
                    <div className="h-12 flex items-center gap-2">
                      <Image
                        src={course.logo}
                        alt={`${course.subTitle} logo`}
                        width={50}
                        height={50}
                      />
                      <p>{course.subTitle}</p>
                    </div>
                    <ChevronRight className="text-slate-500" />
                  </Link>
                ))}
              </div>
            </div>
          </ul>

          <button className="bg-gradient-to-r px-6 py-1.5 from-[#008A20] to-[#002408] rounded-full text-white h-fit w-fit text-sm">
            Register Now
          </button>
        </div>

        {/* Mobile Menu - Curved Animation */}
        <div
          style={{ height: "calc(100vh - 105px)" }}
          className={`z-50 fixed inset-0 bg-white md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 visible clip-path-circle-full"
              : "opacity-0 invisible clip-path-circle-small"
          }`}
        >
          <div className="flex flex-col h-full justify-between p-8">
            <ul className="flex flex-col gap-8 items-start mb-12">
              <li
                className="w-full flex item-end justify-end "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X />
              </li>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  } transition-all duration-300 ease-out delay-${index * 100} w-full`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isMobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(2rem)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
                  {item.dropdown ? (
                    <div className="w-full">
                      <div 
                        className="flex justify-between items-center w-full"
                        onClick={() => setIsMobileCourseOpen(!isMobileCourseOpen)}
                      >
                        <a
                          href={item.href}
                          className={`text-xl font-medium ${
                            item.href === pathname
                              ? "text-green-800 font-bold"
                              : "text-black/80"
                          }`}
                        >
                          {item.title}
                        </a>
                        <ChevronDown 
                          className={`transition-transform ${
                            isMobileCourseOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      
                      {/* Mobile Course Dropdown */}
                      {isMobileCourseOpen && item.dropdown && (
                        <div className="ml-4 mt-4 space-y-3">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="flex items-center gap-3 py-2 px-3 bg-gray-100 rounded-md hover:bg-gray-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <Image 
                                src={subItem.logo} 
                                alt={`${subItem.subTitle} logo`} 
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                              />
                              {subItem.subTitle}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`text-xl font-medium ${
                        item.href === pathname
                          ? "text-green-800 font-bold"
                          : "text-black/80"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="py-3 border-t-2 border-t-slate-300">
              <button
                className={`bg-green-800 w-full border-t-2 px-8 py-3 rounded-full text-white font-semibold shadow-lg transform transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-0"
                }`}
                style={{
                  transitionDelay: "400ms",
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;