"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function SpecialButton() {
  return (
    <div data-aos="zoom-in" data-aos-delay="350" className="z-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        className="cursor-pointer bg-black text-white flex items-center space-x-2 px-8"
      >
        <a href="/register-now" className="font-semibold">Get Started</a>
      </HoverBorderGradient>
    </div>
  );
}

