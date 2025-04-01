/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  href,
  containerClassName,
  className,
  as: Tag = "a",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    href:string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // Neon green gradients for both light and dark modes
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #00ff4c 0%, rgba(0, 255, 76, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #00ff4c 0%, rgba(0, 255, 76, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #00ff4c 0%, rgba(0, 255, 76, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #00ff4c 0%, rgba(0, 255, 76, 0) 100%)",
  };

  // Neon green highlight with glow effect
  const highlight = "radial-gradient(75% 181.16% at 50% 50%, #00ff4c 0%, rgba(0, 255, 76, 0.5) 50%, rgba(0, 255, 76, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        "bg-black/20 hover:bg-black/10 dark:bg-white/20", // Works on both backgrounds
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto z-10 px-4 py-2 rounded-[inherit]",
          "bg-black text-white dark:bg-black dark:text-white", // Dark theme for text container
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(3px)", // Increased blur for more neon effect
          position: "absolute",
          width: "100%",
          height: "100%",
          boxShadow: hovered ? "0 0 15px rgba(0, 255, 76, 0.6)" : "none" // Glow effect on hover
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}