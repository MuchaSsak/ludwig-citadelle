"use client";

import { useMotionValue, useTransform } from "framer-motion";
import React from "react";

import { MotionDiv } from "@/components/utils/MotionElements";

function Rotating3DCard({ children }: { children: React.ReactNode }) {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values

  const handleMouseMove = (event: React.MouseEvent) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <MotionDiv
      className="flex h-screen w-screen items-center justify-center [perspective:800px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <MotionDiv
        style={{
          rotateX,
          rotateY,
        }}
        className="ease m-auto flex size-full items-center justify-center transition-all duration-100 [perspective:800px] [transform-style:preserve-3d]"
        transition={{ velocity: 0 }}
      >
        {children}
      </MotionDiv>
    </MotionDiv>
  );
}

export default Rotating3DCard;
