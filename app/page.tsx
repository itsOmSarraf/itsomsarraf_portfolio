"use client"

import { experiences } from "./constants/experiences";
import React, { useState, useRef, useEffect } from "react";


export default function Page() {

  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        20, Verb 😎
      </h1>
      <p className="mb-4 text-pretty">
        {`Om Sarraf is an individual from India who is engaged in various activities such as freelancing, learning new technologies, watching anime, and reading books.`}
      </p>
      <p className="text-xl">Experience:</p>
      <div className="w-full md:flex-col flex-row space-x-0">
        {Object.entries(experiences).map(([experience, { designation, month, year }]) => {
          const isOngoing = year[1] === 'Present' || month[1] === 'Present';
          let ongoingText = isOngoing ? 'Present' : `${month[1]} '${year[1]}`;

          return (
            <div key={experience} className="flex justify-between w-full mt-5" onClick={() => setSelectedExperience(experience)}>
              <div className="flex flex-row items-center text-nowrap text-left">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {month[0]} '{year[0]} - {ongoingText}
                </p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-balance md:text-nowrap text-right underline cursor-pointer">
                  {designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {selectedExperience && (<Overlay isVisible={true}><ExperienceDetailsPopup experience={experiences[selectedExperience]} setSelectedExperience={setSelectedExperience} />
      </Overlay>)}
    </section>
  );
}

function Overlay({ isVisible, children }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 w-full">
      {children}
    </div>
  );
}

function ExperienceDetailsPopup({ experience, setSelectedExperience }: { experience: any, setSelectedExperience: (experience: string | null) => void }) {
  const popupRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setSelectedExperience(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedExperience]);

  return (
    <div
      ref={popupRef}
      className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm bg-black/30"
    >
      <div className="bg-white rounded-lg shadow-lg mx-auto relative p-6 max-w-96">
        <h2 className="text-2xl font-bold mb-2 text-black">{experience.designation}</h2>
        <div className="flex gap-10 mb-2 text-wrap">
          <p className="text-sm text-neutral-600 mb-1">
            <span className="font-semibold"></span>📍: {experience.location}
          </p>
          <p className="text-sm text-neutral-600 mb-1">
            <span className="font-semibold">Timeline : </span>{experience.month[0]}'{experience.year[0]} - {experience.year[1] === 'Present' ? 'Present' : `20${experience.year[1]}`}
          </p>
        </div>
        <p className="text-md text-neutral-800 text-wrap font-sans">{experience.more}</p>
      </div>
      <button
        onClick={() => setSelectedExperience(null)}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-neutral-300 cursor-pointer px-3 py-1 rounded mb-40 hover:underline "
        style={{ zIndex: 1000 }}
      >
        Close
      </button>
    </div>
  );
}

