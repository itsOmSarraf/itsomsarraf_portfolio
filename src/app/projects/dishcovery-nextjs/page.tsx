import React from 'react';

const Page = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
        <div className="text-center">
            <svg
                className="w-16 h-16 mx-auto mb-4 text-green-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
            <h1 className="mb-4 text-4xl font-bold text-gray-800">Welcome to Dishcovery</h1>
            <p className="mb-8 text-xl text-gray-600">Snap a photo of your vegetables, input preferences, and get personalized meal suggestions instantly.</p>
            <a
                href="https://dishcovery-nextjs.vercel.app/recommend"
                className="px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
                Get Started
            </a>
        </div>
    </div>
);

export default Page;