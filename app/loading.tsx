"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center space-y-4 justify-center bg-white/40 backdrop-blur-xs z-50">
      {/* <div className="w-10 h-10 rounded-full border-4 border-t-4 border-t-green-500 animate-spin">
      </div>
      <p className="font-semibold text-xl ">Loading</p> */}
<img src="Ace Logo.svg" alt=""  className="w-60 max-md:w-32 animate-pulse"/>
      </div>
  );
}
