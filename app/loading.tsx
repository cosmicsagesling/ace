"use client";

import Lottie from "lottie-react"
import animationData from "@/public/preloader.json";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Lottie animationData={animationData} className="w-64 h-64" loop autoPlay />
    </div>
  );
}
