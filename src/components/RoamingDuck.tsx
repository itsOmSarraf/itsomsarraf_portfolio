"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import duckGif from "@/public/duck_yellow_walk_8fps.gif";

const DUCK_SIZE_MOBILE = 80;
const DUCK_SIZE_DESKTOP = 100;
const DEFAULT_SPEED = 110;

const CHROME_EXTENSION_URL = "https://chromewebstore.google.com/detail/chrome-pets-pets-for-your/ifeomenedhoncedpchjfjcencnmnonen";


export default function RoamingDuck() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [duckSize, setDuckSize] = useState(DUCK_SIZE_DESKTOP);
  
  const progressRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    // Random starting position along the perimeter
    progressRef.current = Math.random();

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const mobile = width < 768;

      const currentSize = mobile ? DUCK_SIZE_MOBILE : DUCK_SIZE_DESKTOP;
      setDuckSize(currentSize);

      // Padding: push duck right to the edge (accounting for sprite padding)
      const padding = currentSize / 3 + 4;
      // Corner offset: duck turns before reaching the corner
      const cornerOffset = currentSize / 2;
      
      // Effective edge lengths (shortened by corner offset on each end)
      const effectiveWidth = width - 2 * cornerOffset;
      const effectiveHeight = height - 2 * cornerOffset;
      const totalPerimeter = 2 * (effectiveWidth + effectiveHeight);

      // Move progress forward at default speed
      const currentSpeed = DEFAULT_SPEED / totalPerimeter;
      progressRef.current += currentSpeed * deltaTime;
      if (progressRef.current >= 1) {
        progressRef.current -= 1;
      }

      // Calculate position and rotation based on progress
      const distance = progressRef.current * totalPerimeter;

      let x: number, y: number, rot: number;

      if (distance < effectiveWidth) {
        // Bottom edge - moving RIGHT →
        x = cornerOffset + distance;
        y = height - padding;
        rot = 0;
      } else if (distance < effectiveWidth + effectiveHeight) {
        // Right edge - moving UP ↑
        const edgeProgress = distance - effectiveWidth;
        x = width - padding;
        y = height - cornerOffset - edgeProgress;
        rot = -90;
      } else if (distance < 2 * effectiveWidth + effectiveHeight) {
        // Top edge - moving LEFT ←
        const edgeProgress = distance - effectiveWidth - effectiveHeight;
        x = width - cornerOffset - edgeProgress;
        y = padding;
        rot = 180;
      } else {
        // Left edge - moving DOWN ↓
        const edgeProgress = distance - 2 * effectiveWidth - effectiveHeight;
        x = padding;
        y = cornerOffset + edgeProgress;
        rot = 90;
      }

      setPosition({ x, y });
      setRotation(rot);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleDuckClick = () => {
    window.open(CHROME_EXTENSION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Duck */}
      <div
        className="fixed z-[9999] cursor-pointer"
        style={{
          width: duckSize,
          height: duckSize,
          left: position.x - duckSize / 2,
          top: position.y - duckSize / 2,
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
        onClick={handleDuckClick}
        title="Get Chrome Extension"
      >
        <Image
          src={duckGif}
          alt="Roaming duck"
          width={duckSize}
          height={duckSize}
          className="drop-shadow-lg"
          unoptimized
          priority
        />
      </div>
    </>
  );
}
