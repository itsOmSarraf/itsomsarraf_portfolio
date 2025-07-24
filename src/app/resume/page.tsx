"use client";

import Link from "next/link";

export default function Resume() {
    return (
        <div className="w-full h-screen flex flex-col items-center gap-4">
            <Link
                href="https://drive.google.com/file/d/1bmrHuYXWg1XsBgdFQjAMvHhjphsC0kKp/view?usp=sharing"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Download Resume
            </Link>
            <iframe
                src="https://drive.google.com/file/d/1bmrHuYXWg1XsBgdFQjAMvHhjphsC0kKp/preview"
                width="70%"
                height="90%"
                allow="autoplay"
                className="border-none"
                title="Resume"
            />
        </div>
    );
}
