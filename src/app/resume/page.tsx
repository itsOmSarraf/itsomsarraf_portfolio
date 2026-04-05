"use client";

import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiDownload } from "react-icons/fi";

const FILE_ID = "1bmrHuYXWg1XsBgdFQjAMvHhjphsC0kKp";
const RESUME_URL = `https://drive.google.com/file/d/${FILE_ID}`;
const EMBED_URL = `https://drive.google.com/file/d/${FILE_ID}/preview?usp=sharing#view=FitH`;

export default function Resume() {
    return (
        <div className="w-full h-screen flex flex-col" style={{ background: '#fff' }}>
            <header
                className="flex items-center justify-between px-4 sm:px-10 py-3 border-b flex-shrink-0"
                style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
                <Link
                    href="/"
                    className="flex items-center gap-2 font-body text-sm font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}>
                    <FiArrowLeft size={16} />
                    Back
                </Link>
                <span className="font-heading text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Resume
                </span>
                <div className="flex items-center gap-2">
                    <a
                        href={`${RESUME_URL}/export?format=pdf`}
                        className="flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded-theme-sm transition-opacity hover:opacity-80"
                        style={{ background: 'var(--accent-1)', color: 'var(--bg-primary)' }}>
                        <FiDownload size={13} />
                        <span className="hidden sm:inline">Download</span>
                    </a>
                    <a
                        href={`${RESUME_URL}/view?usp=sharing`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded-theme-sm border transition-opacity hover:opacity-80"
                        style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                        <FiExternalLink size={13} />
                        <span className="hidden sm:inline">Open</span>
                    </a>
                </div>
            </header>
            <div className="flex-1 flex items-center justify-center" style={{ background: '#fff' }}>
                <iframe
                    src={EMBED_URL}
                    allow="autoplay"
                    className="border-none w-full h-full max-w-4xl"
                    title="Resume"
                    style={{ background: '#fff' }}
                />
            </div>
        </div>
    );
}
