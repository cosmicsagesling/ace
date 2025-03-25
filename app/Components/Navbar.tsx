/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Figtree } from "next/font/google";


const figtree = Figtree(
  {
    subsets:['latin']
  }
)

const Navbar = () => {
  const [isHovered, setHovered] = useState(false);
  const [isCourse, setisCourse] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Courses",
      href: "/courses",
      icon: "AI.png",
      dropdown: [
        {
          subTitle: "Heading 1",
          subLinks: [{ title: "Sub Heading 1", href: "/" }],
        },
      ],
    },
    { title: "Skills", href: "/Skills" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const pathname = usePathname();

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="box-border z-50 w-full bg-white backdrop-blur-3xl px-6 py-2 border-b-2 border-b-slate-200 sticky top-0">
      <nav className="flex items-center justify-between">
        <Image alt="Ace Logo" src={"/Ace Logo.jpg"} width={100} height={100} />

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
                  } hover:text-gray-500 text-sm`}
                >
                  {item?.icon && (
                    <>
                      <img src="/ai.png" alt="" className="w-5 h-5" />
                    </>
                  )}
                  <a href={item.href}>{item.title}</a>
                  {item.dropdown && (
                    <ChevronDown
                      className={`transition-all ${
                        isHovered && "rotate-180"
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
              } transition-all duration-500 absolute w-96 h-96 top-22 bg-white ring-1 ring-slate-300 rounded-md p-6 shadow-lg`}
            >
              <h1 className="font-semibold text-xl">Course Dropdown</h1>
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
              <li className="w-full flex item-end justify-end " onClick={() => setIsMobileMenuOpen(false)}>
                <X />
              </li>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  } transition-all duration-300 ease-out delay-${index * 100}`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isMobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(2rem)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
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

// Add this to your global CSS (e.g., globals.css)
// Or you can add it inline in a style tag if you prefer

export default Navbar;
