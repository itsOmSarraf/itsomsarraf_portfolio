"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import duckGif from "@/public/duck_yellow_walk_8fps.gif";

const DUCK_SIZE_MOBILE = 80;
const DUCK_SIZE_DESKTOP = 100;
const DEFAULT_SPEED = 70;

export default function RoamingDuck() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [duckSize, setDuckSize] = useState(DUCK_SIZE_DESKTOP);
  const [customSize, setCustomSize] = useState<number | null>(null);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sizeInput, setSizeInput] = useState("");
  
  const progressRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const speedRef = useRef(DEFAULT_SPEED);

  // Keep speedRef in sync with speed state
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

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

      // Use custom size if set, otherwise responsive default
      const currentSize =
        customSize ?? (width >= 768 ? DUCK_SIZE_DESKTOP : DUCK_SIZE_MOBILE);
      setDuckSize(currentSize);

      // Padding: push duck right to the edge (accounting for sprite padding)
      const padding = currentSize / 3 + 4;
      // Corner offset: duck turns before reaching the corner
      const cornerOffset = currentSize / 2;
      
      // Effective edge lengths (shortened by corner offset on each end)
      const effectiveWidth = width - 2 * cornerOffset;
      const effectiveHeight = height - 2 * cornerOffset;
      const totalPerimeter = 2 * (effectiveWidth + effectiveHeight);

      // Move progress forward using ref for latest speed
      const currentSpeed = speedRef.current / totalPerimeter;
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
  }, [customSize]);

  const handleDuckClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setSizeInput(customSize?.toString() || duckSize.toString());
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSizeInput(value);
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 20 && num <= 1000) {
      setCustomSize(num);
    }
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(parseInt(e.target.value, 10));
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

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

      {/* Settings Menu */}
      {menuOpen && (
        <div
          className="fixed z-[10000] bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-xl p-4 shadow-2xl"
          style={{
            left: Math.min(position.x + duckSize / 2 + 10, window.innerWidth - 220),
            top: Math.min(position.y - 60, window.innerHeight - 180),
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-yellow-400 font-bold text-sm mb-3 flex items-center gap-2">
            🦆 Duck Settings
          </div>

          {/* Size Input */}
          <div className="mb-3">
            <label className="text-zinc-400 text-xs block mb-1">
              Size (px)
            </label>
            <input
              type="number"
              min="20"
              max="1000"
              value={sizeInput}
              onChange={handleSizeChange}
              className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-yellow-500 transition-colors"
              placeholder="20-1000"
            />
          </div>

          {/* Speed Slider */}
          <div>
            <label className="text-zinc-400 text-xs block mb-1">
              Speed: {speed} px/s
            </label>
            <input
              type="range"
              min="20"
              max="300"
              value={speed}
              onChange={handleSpeedChange}
              className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 mt-0.5">
              <span>🐢 Slow</span>
              <span>Fast 🚀</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
