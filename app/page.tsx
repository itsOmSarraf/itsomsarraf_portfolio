"use client"

import Component from "./components/detailscard";
import { experiences } from "./lib/experiences";
import React, { useState, useRef, useEffect, RefObject } from "react";

// Define the type for Experience
type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  Sdate: string;
  Edate: string;
  description: string;
  url: string;
};

export default function Page() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        20, Verb 😎
      </h1>
      <p className="mb-4 text-pretty">
        {`Om Sarraf is an individual from India who is engaged in various activities such as freelancing, learning new technologies, watching anime, and reading books.`}
      </p>
      <p className="text-xl">Experience:</p>
      <div className="w-full flex flex-col space-y-5">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex justify-between w-full mt-5 cursor-pointer"
            onClick={() => setSelectedExperience(experience)}
          >
            <div className="flex flex-row items-center text-nowrap text-left">
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {experience.duration}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <p className="text-neutral-900 dark:text-neutral-100 text-wrap md:text-nowrap text-right underline">
                {experience.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedExperience && (
        <Overlay isVisible={true}>
          <ExperienceDetailsPopup
            experience={selectedExperience}
            setSelectedExperience={setSelectedExperience}
          />
        </Overlay>
      )}
    </section>
  );
}

function Overlay({ isVisible, children }) {
  if (!isVisible) return null;

  return <div className="fixed bg-white dark:bg-black z-40 w-full">{children}</div>;
}

function ExperienceDetailsPopup({ experience, setSelectedExperience }) {
  const popupRef: RefObject<HTMLDivElement> = useRef(null);

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
      // className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm bg-black/30"
      className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-3xl "
    >
      <Component
        duration={experience.duration}
        title={experience.title}
        location={experience.location}
        Sdate={experience.Sdate}
        Edate={experience.Edate}
        company={experience.company}
        description={experience.description}
        url={experience.url}
      />
      <button
        onClick={() => setSelectedExperience(null)}
        className="absolute top-4 right-4 text-neutral-300 cursor-pointer px-3 py-3 rounded hover:underline"
        style={{ zIndex: 1000 }}
      >
        X
      </button>
    </div>
  );
}
