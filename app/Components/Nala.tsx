"use client";

import Lottie from "lottie-react";
import animationData from "@/public/Nala.json";

export default function NalaLogo() {
  return (
    <div className="">
      <Lottie animationData={animationData} className="w-32 h-32" loop autoPlay />
    </div>
  );
}
