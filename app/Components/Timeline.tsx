import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 text-3xl max-md:text-xl dark:text-neutral-200 font-semibold mb-8">
          1. The Beginning – A Vision for Excellence
          </p>
          <p className="text-slate-600">
          AMOS Global Solutions launches The A.C.E. with a mission to redefine training through quality, innovation, and global impact.
          </p>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-3xl font-semibold  mb-8">
          2. Expanding Boundaries

          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          The A.C.E. scales its reach—introducing new programs, onboarding global trainers, and connecting with learners across continents.
          </p>
          <div className="grid grid-cols-2 gap-4">
          <Image alt="image" src={"https://www.amosglobalsolutions.com/gallery/SIMATS/amos_simats_12.jpg"} width={500} height={500}/>
            <Image alt="image" src={"https://www.amosglobalsolutions.com/gallery/SIMATS/amos_simats_14.jpg"} width={500} height={500}/>
          </div>
        </div>
      ),
    },
    {
      title: "Idea",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-3xl font-semibold mb-4">
          3. Innovation in Learning

          </p>
          <div className="mb-8">
            <div>
              <p>
              Integrating AI-powered tools, immersive simulations, and flexible learning models, A.C.E. sets a new benchmark in education excellence.


              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
