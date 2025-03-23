"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function SpecialButton() {
  return (
    <div data-aos="zoom-in" data-aos-delay="350" className="z-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="a"
        href="https://amosglobalsolutions.com"
        className=" bg-black text-white flex items-center space-x-2 px-8"
      >
        <span className="font-semibold">Get Started</span>
      </HoverBorderGradient>
    </div>
  );
}

