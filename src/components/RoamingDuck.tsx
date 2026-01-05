"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import duckGif from "@/public/duck_yellow_walk_8fps.gif";

const DUCK_SIZE_MOBILE = 80;
const DUCK_SIZE_DESKTOP = 100;
const DEFAULT_SPEED = 110;

const CHROME_EXTENSION_URL = "https://chromewebstore.google.com/detail/chrome-pets-pets-for-your/ifeomenedhoncedpchjfjcencnmnonen";

// Nudge timing (in ms)
const NUDGE_SHOW_DURATION = 1500;  // Show for 1.5 seconds
const NUDGE_HIDE_DURATION = 10000; // Hide for 10 seconds

export default function RoamingDuck() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [duckSize, setDuckSize] = useState(DUCK_SIZE_DESKTOP);
  const [isMobile, setIsMobile] = useState(false);
  const [showNudge, setShowNudge] = useState(true);
  const [nudgeDisabled, setNudgeDisabled] = useState(false);
  
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
      
      // Check if mobile
      const mobile = width < 768;
      setIsMobile(mobile);

      // Use responsive default size
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

  // Periodic nudge toggle
  useEffect(() => {
    if (nudgeDisabled) return;

    const toggleNudge = () => {
      setShowNudge((prev) => !prev);
    };

    // Initial show, then toggle periodically
    const interval = setInterval(() => {
      toggleNudge();
    }, showNudge ? NUDGE_SHOW_DURATION : NUDGE_HIDE_DURATION);

    return () => clearInterval(interval);
  }, [showNudge, nudgeDisabled]);

  const handleDuckClick = () => {
    setNudgeDisabled(true);
    setShowNudge(false);
    window.open(CHROME_EXTENSION_URL, "_blank", "noopener,noreferrer");
  };

  // Calculate nudge position based on which edge the duck is on
  const getNudgeStyle = () => {
    const offset = duckSize / 2 + 12;
    
    if (rotation === 0) {
      // Bottom edge - show above
      return { left: position.x, top: position.y - offset, transform: "translateX(-50%)" };
    } else if (rotation === -90) {
      // Right edge - show to the left
      return { left: position.x - offset, top: position.y, transform: "translateY(-50%)" };
    } else if (rotation === 180) {
      // Top edge - show below
      return { left: position.x, top: position.y + offset, transform: "translateX(-50%)" };
    } else {
      // Left edge - show to the right
      return { left: position.x + offset, top: position.y, transform: "translateY(-50%)" };
    }
  };

  return (
    <>
      {/* Pixelated Nudge */}
      {showNudge && (
        <div
          className="fixed z-[10000] pointer-events-none select-none"
          style={getNudgeStyle()}
        >
          <div
            className="animate-bounce"
            style={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
              fontSize: isMobile ? "8px" : "10px",
              color: "#fbbf24",
              textShadow: `
                2px 0 0 #78350f,
                -2px 0 0 #78350f,
                0 2px 0 #78350f,
                0 -2px 0 #78350f,
                1px 1px 0 #78350f,
                -1px -1px 0 #78350f,
                1px -1px 0 #78350f,
                -1px 1px 0 #78350f
              `,
              letterSpacing: "1px",
              whiteSpace: "nowrap",
              imageRendering: "pixelated",
            }}
          >
            {isMobile ? "▼ TAP ME! ▼" : "▼ CLICK ME! ▼"}
          </div>
        </div>
      )}

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
