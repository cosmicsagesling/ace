"use client";

import Lottie from "lottie-react"
import animationData from "@/public/Tick.json";

export default function Authorize() {
  return (
    <div className="flex items-center justify-center bg-white z-50">
      <Lottie animationData={animationData} className="w-56 h-56" loop autoPlay />
    </div>
  );
}