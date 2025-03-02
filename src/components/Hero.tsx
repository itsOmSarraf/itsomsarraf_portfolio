'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import OmSarraf from "@/public/om_new.jpeg";
import Socials from "../app/Socials";
import { motion } from "framer-motion";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const { clientX, clientY } = e;
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            const xPercent = x / rect.width;
            const yPercent = y / rect.height;

            const rotateX = (yPercent - 0.5) * 10;
            const rotateY = (0.5 - xPercent) * 10;

            containerRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
            containerRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
                </div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]"></div>

            {/* Content container */}
            <div className="container relative mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen z-10">
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-6xl mx-auto perspective-1000 transform-style-3d"
                    style={{
                        transform: 'perspective(1000px) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))',
                        transition: 'transform 0.1s ease'
                    }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* Image section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-full lg:w-2/5 order-2 lg:order-1"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                                <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white/10 shadow-2xl">
                                    <Image
                                        src={OmSarraf}
                                        alt="Om Sarraf"
                                        fill
                                        className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-3/5 text-center lg:text-left order-1 lg:order-2"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-200 border border-white/20"
                            >
                                Available for work
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                <span className="block">Hi, I'm</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block">
                                    Om Sarraf
                                </span>
                            </h1>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90">
                                <span className="relative inline-block">
                                    <span className="absolute inset-x-0 bottom-0 h-3 bg-blue-500/30"></span>
                                    <span className="relative">FullStack Developer</span>
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl">
                                I'm a developer from India currently looking for <span className="font-semibold text-white">part-time/intern roles</span> and also open to <span className="font-semibold text-white">freelance opportunities</span>. Let's build something amazing together.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                                <a
                                    href="mailto:itsomsarraf@gmail.com"
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    Contact Me
                                </a>
                                <a
                                    href="/resume"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 shadow-lg transition-all duration-300 flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                    View Resume
                                </a>
                            </div>

                            <Socials />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                            <motion.div
                                animate={{
                                    y: [0, 12, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                }}
                                className="w-1.5 h-1.5 bg-white rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}