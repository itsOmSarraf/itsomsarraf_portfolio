'use client';

import React from 'react';
import { BsTwitterX, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const socials = [
    { href: 'https://in.linkedin.com/in/itsomsarraf', icon: BsLinkedin, label: 'LinkedIn' },
    { href: 'https://x.com/itsOmSarraf_', icon: BsTwitterX, label: 'X / Twitter' },
    { href: 'https://github.com/itsomsarraf', icon: BsGithub, label: 'GitHub' },
    { href: 'https://instagram.com/itsomsarraf', icon: BsInstagram, label: 'Instagram' },
];

export default function Socials() {
    return (
        <div className="flex items-center gap-4 justify-center md:justify-start">
            {socials.map(({ href, icon: Icon, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-theme-sm border hover:scale-110 active:scale-95"
                    style={{
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-secondary)',
                        transition: 'transform 0.2s ease, border-color 0.2s ease, color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-1)';
                        e.currentTarget.style.color = 'var(--accent-1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                    }}>
                    <Icon size={18} />
                </a>
            ))}
        </div>
    );
}
