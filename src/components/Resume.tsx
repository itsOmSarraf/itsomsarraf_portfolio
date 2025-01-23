import Link from 'next/link'
import React from 'react'

export default function Resume() {
    return (
        <div className="fixed  top-0 right-0 z-50 w-40 md:w-52 h-52 md:h-96 overflow-hidden cursor-pointer">
            <div className="bg-red-500 text-white w-[170%] md:w-[200%] text-center absolute top-12 right-[-50%] p-1 md:py-2 transform rotate-45 origin-center">
                <Link href="/resume" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl font-semibold">{'   '}Resume.pdf</Link>
            </div>
        </div>
    )
}