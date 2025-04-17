// components/NalaLogo.tsx
"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/public/Nala.json";

export default function NalaLogo() {
  return (
    <div className="">
      <Lottie animationData={animationData} className="w-32 h-32" loop autoPlay />
    </div>
  );
}
