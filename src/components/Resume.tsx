'use client';

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed top-0 right-0 z-50 w-40 md:w-52 h-52 md:h-96 overflow-hidden cursor-pointer"
        >
            <div className="absolute top-0 right-0 w-full h-full">
                {/* Animated corner fold effect */}
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute top-0 right-0"
                >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        d="M0,0 L100,0 L100,100 Z"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                    />
                </svg>

                {/* Resume ribbon */}
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="absolute top-12 right-[-60%] w-[200%] transform rotate-45 origin-center overflow-hidden"
                >
                    <div className="relative">
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-x"></div>

                        {/* Shine effect */}
                        <motion.div
                            animate={{
                                x: ["100%", "-100%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 2,
                                ease: "linear",
                                repeatDelay: 3
                            }}
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        ></motion.div>

                        {/* Content */}
                        <Link
                            href="/resume"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-3 md:py-4 text-center relative z-10"
                        >
                            <div className="flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 md:h-6 md:w-6 mr-2 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                <span className="text-sm md:text-xl font-bold text-white tracking-wider">RESUME</span>
                            </div>
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    repeatType: "loop"
                                }}
                                className="mt-1 md:mt-2 text-[10px] md:text-xs text-white/80 font-medium"
                            >
                                CLICK TO VIEW
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}