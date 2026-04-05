"use client";

import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiDownload } from "react-icons/fi";

const RESUME_URL = "https://drive.google.com/file/d/1bmrHuYXWg1XsBgdFQjAMvHhjphsC0kKp";

export default function Resume() {
    return (
        <div
            className="w-full min-h-screen flex flex-col"
            style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <header
                className="flex items-center justify-between px-6 sm:px-10 py-4 border-b"
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
                <div className="flex items-center gap-3">
                    <a
                        href={`${RESUME_URL}/export?format=pdf`}
                        className="flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded-theme-sm transition-opacity hover:opacity-80"
                        style={{ background: 'var(--accent-1)', color: 'var(--bg-primary)' }}>
                        <FiDownload size={13} />
                        Download
                    </a>
                    <a
                        href={`${RESUME_URL}/view?usp=sharing`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded-theme-sm border transition-opacity hover:opacity-80"
                        style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                        <FiExternalLink size={13} />
                        Open
                    </a>
                </div>
            </header>
            <div className="flex-1 flex items-center justify-center" style={{ background: '#fff' }}>
                <iframe
                    src={`${RESUME_URL}/preview`}
                    allow="autoplay"
                    className="w-full h-full border-none"
                    title="Resume"
                    style={{ background: '#fff' }}
                />
            </div>
        </div>
    );
}
