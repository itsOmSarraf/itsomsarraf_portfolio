'use client';

import Image from "next/image";
import OmSarraf from "@/public/itsomsarraf.png";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowDownLeft } from "react-icons/go";
import { BsTwitterX, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const socials = [
    { href: 'https://github.com/itsomsarraf', Icon: BsGithub, label: 'GitHub' },
    { href: 'https://x.com/itsOmSarraf_', Icon: BsTwitterX, label: 'X' },
    { href: 'https://instagram.com/itsomsarraf', Icon: BsInstagram, label: 'Instagram' },
    { href: 'https://in.linkedin.com/in/itsomsarraf', Icon: BsLinkedin, label: 'LinkedIn' },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BRUTALIST — massive type, marquee, raw square photo
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function BrutalistHero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
            <div className="overflow-hidden py-3 border-b-[3px]" style={{ borderColor: 'var(--border-color)' }}>
                <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className="flex whitespace-nowrap">
                    {[...Array(8)].map((_, i) => (
                        <span key={i} className="font-heading text-xl md:text-3xl tracking-wider mx-4"
                            style={{ color: 'var(--text-primary)' }}>
                            FULLSTACK DEVELOPER &bull; WEB &bull; MOBILE &bull; AI AGENTS &bull; AUTOMATION &bull;
                        </span>
                    ))}
                </motion.div>
            </div>
            <div className="flex-1 flex items-center">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full py-8 md:py-12">
                    {/* Mobile: name + big image side by side */}
                    {/* Mobile: name + big image side by side */}
                    <div className="relative mb-3 md:hidden">
                        <div className="flex items-end gap-4">
                            <h1 className="font-heading text-[4rem] leading-[0.85] uppercase flex-shrink-0"
                                style={{ color: 'var(--text-primary)' }}>
                                OM<br />SARRAF
                            </h1>
                            <div className="flex-1 ml-auto">
                                <div className="w-full aspect-[3/4] max-w-[220px] ml-auto overflow-hidden border-[3px]"
                                    style={{ borderColor: 'var(--text-primary)' }}>
                                    <Image src={OmSarraf} alt="Om Sarraf" width={300} height={400}
                                        className="object-cover w-full h-full md:grayscale md:hover:grayscale-0 transition-all duration-100" priority />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: two-column layout with text content inside left column */}
                    <div className="hidden md:flex items-start justify-between gap-12">
                        <div className="w-3/5">
                            <h1 className="font-heading text-[9rem] leading-[0.85] mb-6 uppercase"
                                style={{ color: 'var(--text-primary)' }}>
                                OM<br />SARRAF
                            </h1>
                            <RoughNotationGroup show={true}>
                                <div className="mb-5 pl-5 border-l-4" style={{ borderColor: 'var(--accent-1)' }}>
                                    <p className="font-body text-base leading-relaxed max-w-md"
                                        style={{ color: 'var(--text-secondary)' }}>
                                        Shipping{' '}
                                        <RoughNotation type="highlight" color="#FFEB00" multiline={true}>
                                            products that matter
                                        </RoughNotation>
                                        {' '}— from <span className="font-bold">web &amp; mobile apps</span> to{' '}
                                        <span className="font-bold">AI agents &amp; automation</span>.
                                        {' '}Worked with{' '}
                                        <span className="font-bold">clients</span>{' '}
                                        <RoughNotation type="underline" color="#B8001F">
                                            across the globe
                                        </RoughNotation>.
                                    </p>
                                </div>
                            </RoughNotationGroup>
                            <a href="mailto:itsomsarraf@gmail.com"
                                className="inline-block font-body text-sm font-bold uppercase tracking-wider px-6 py-3 border-[3px] transition-colors duration-75 hover:bg-[--accent-1] hover:!text-white hover:border-[--accent-1]"
                                style={{ borderColor: 'var(--text-primary)', color: 'var(--text-primary)' }}>
                                LET&apos;S TALK &rarr;
                            </a>
                            <div className="flex gap-6 mt-6 flex-wrap">
                                {socials.map(({ href, label }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                        className="font-body text-xs uppercase tracking-widest font-bold border-b-[3px] pb-1 hover:border-[--accent-1] transition-colors duration-75"
                                        style={{ borderColor: 'var(--text-primary)', color: 'var(--text-primary)' }}>
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="w-2/5 flex justify-end">
                            <div className="w-full aspect-square overflow-hidden border-[4px]"
                                style={{ borderColor: 'var(--text-primary)' }}>
                                <Image src={OmSarraf} alt="Om Sarraf" width={500} height={500}
                                    className="object-cover w-full h-full md:grayscale md:hover:grayscale-0 transition-all duration-100" priority />
                            </div>
                        </div>
                    </div>

                    {/* Mobile-only text content */}
                    <div className="md:hidden">
                        <RoughNotationGroup show={true}>
                            <div className="mb-5 pl-5 border-l-4" style={{ borderColor: 'var(--accent-1)' }}>
                                <p className="font-body text-sm leading-relaxed max-w-md"
                                    style={{ color: 'var(--text-secondary)' }}>
                                    Shipping{' '}
                                    <RoughNotation type="highlight" color="#FFEB00" multiline={true}>
                                        products that matter
                                    </RoughNotation>
                                    {' '}— from <span className="font-bold">web &amp; mobile apps</span> to{' '}
                                    <span className="font-bold">AI agents &amp; automation</span>.
                                    {' '}Worked with{' '}
                                    <span className="font-bold">clients</span>{' '}
                                    <RoughNotation type="underline" color="#B8001F">
                                        across the globe
                                    </RoughNotation>.
                                </p>
                            </div>
                        </RoughNotationGroup>
                        <a href="mailto:itsomsarraf@gmail.com"
                            className="inline-block font-body text-sm font-bold uppercase tracking-wider px-6 py-3 border-[3px] transition-colors duration-75 hover:bg-[--accent-1] hover:!text-white hover:border-[--accent-1]"
                            style={{ borderColor: 'var(--text-primary)', color: 'var(--text-primary)' }}>
                            LET&apos;S TALK &rarr;
                        </a>
                        <div className="flex gap-6 mt-6 flex-wrap">
                            {socials.map(({ href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                    className="font-body text-xs uppercase tracking-widest font-bold border-b-[3px] pb-1 hover:border-[--accent-1] transition-colors duration-75"
                                    style={{ borderColor: 'var(--text-primary)', color: 'var(--text-primary)' }}>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EDITORIAL — centered serif, ornamental divider
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function EditorialHero() {
    const fade = (d: number) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } });

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-3xl mx-auto px-6 w-full py-20 text-center">
                <motion.p {...fade(0.1)}
                    className="font-body text-xs tracking-[0.35em] uppercase mb-8"
                    style={{ color: 'var(--text-muted)' }}>
                    Portfolio &middot; MMXXVI
                </motion.p>
                <motion.h1 {...fade(0.25)}
                    className="font-heading text-5xl sm:text-6xl md:text-7xl italic font-semibold mb-3"
                    style={{ color: 'var(--text-primary)' }}>
                    Om Sarraf
                </motion.h1>
                <motion.p {...fade(0.35)}
                    className="font-heading text-lg md:text-xl tracking-wide mb-8"
                    style={{ color: 'var(--text-muted)' }}>
                    FullStack Developer
                </motion.p>
                <motion.div {...fade(0.45)} className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px w-16" style={{ background: 'var(--border-color)' }} />
                    <span style={{ color: 'var(--accent-1)', fontSize: '0.9rem' }}>✦</span>
                    <div className="h-px w-16" style={{ background: 'var(--border-color)' }} />
                </motion.div>
                <motion.p {...fade(0.55)}
                    className="font-body text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10"
                    style={{ color: 'var(--text-secondary)' }}>
                    Shipping products that matter — from web &amp; mobile apps to AI agents &amp; automation. Worked with clients across the globe.
                </motion.p>
                <motion.div {...fade(0.65)} className="mb-12">
                    <div className="h-40 w-40 md:h-48 md:w-48 mx-auto rounded-full overflow-hidden"
                        style={{ border: '1px solid var(--border-color)' }}>
                        <Image src={OmSarraf} alt="Om Sarraf" width={192} height={192} className="object-cover w-full h-full" priority />
                    </div>
                </motion.div>
                <motion.div {...fade(0.75)} className="flex items-center justify-center gap-6 mb-8">
                    {socials.map(({ href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                            className="font-body text-sm border-b pb-0.5 hover:border-[--accent-1] hover:text-[--accent-1] transition-colors duration-300"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                            {label}
                        </a>
                    ))}
                </motion.div>
                <motion.div {...fade(0.85)}>
                    <a href="mailto:itsomsarraf@gmail.com"
                        className="inline-flex items-center gap-2 font-body text-sm italic hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--accent-1)' }}>
                        Get in touch <GoArrowDownLeft />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NEON — terminal prompt, staggered lines, scanlines
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function NeonHero() {
    const lines = [
        { cmd: true, text: '$ whoami' },
        { cmd: false, text: 'om_sarraf', highlight: true },
        { cmd: false, text: '' },
        { cmd: true, text: '$ cat role.txt' },
        { cmd: false, text: '> fullstack developer' },
        { cmd: false, text: '> shipping products that matter' },
        { cmd: false, text: '> web · mobile · ai agents · automation' },
        { cmd: false, text: '' },
        { cmd: true, text: '$ cat about.txt' },
        { cmd: false, text: '> worked with clients across the globe' },
        { cmd: false, text: '' },
        { cmd: true, text: '$ ls links/' },
    ];

    return (
        <section className="relative w-full min-h-screen flex items-center" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-6xl mx-auto px-5 sm:px-10 w-full py-16">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-full md:w-3/5">
                        <div className="rounded-sm overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'var(--bg-tertiary)' }}>
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                                </div>
                                <span className="font-body text-[11px] ml-2" style={{ color: 'var(--text-muted)' }}>om@dev ~</span>
                            </div>
                            <div className="p-5 md:p-6 font-body text-sm leading-relaxed space-y-0.5" style={{ background: 'var(--bg-secondary)' }}>
                                {lines.map((line, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, x: -6 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.12, duration: 0.25 }}>
                                        {line.text === '' ? (
                                            <div className="h-3" />
                                        ) : (
                                            <span style={{ color: line.cmd ? 'var(--accent-2)' : line.highlight ? 'var(--accent-1)' : 'var(--text-secondary)' }}
                                                className={line.highlight ? 'glow-text font-bold text-base' : ''}>
                                                {line.text}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.2 }}
                                    className="flex gap-4 pt-1 flex-wrap">
                                    {socials.map(({ href, label }) => (
                                        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                            className="hover:underline font-body text-sm"
                                            style={{ color: 'var(--text-primary)' }}>
                                            {label.toLowerCase()}/
                                        </a>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.6 }}
                                    className="pt-3 flex items-center gap-3">
                                    <span style={{ color: 'var(--accent-2)' }}>$ </span>
                                    <a href="mailto:itsomsarraf@gmail.com" target="_blank" rel="noopener noreferrer"
                                        className="font-body text-sm hover:underline"
                                        style={{ color: 'var(--accent-1)' }}>
                                        mail itsomsarraf@gmail.com
                                    </a>
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.9, repeat: Infinity, repeatType: 'reverse' }}
                                        style={{ color: 'var(--text-primary)' }}>
                                        █
                                    </motion.span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex-shrink-0 relative">
                        <div className="relative h-44 w-44 md:h-52 md:w-52 overflow-hidden rounded-sm neon-pulse"
                            style={{ border: '1px solid var(--border-color)' }}>
                            <Image src={OmSarraf} alt="Om Sarraf" width={208} height={208}
                                className="object-cover w-full h-full" priority
                                style={{ filter: 'brightness(0.85) contrast(1.15) saturate(0.6) sepia(0.3) hue-rotate(100deg)' }} />
                            <div className="absolute inset-0 pointer-events-none"
                                style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,163,0.04) 2px, rgba(0,255,163,0.04) 4px)' }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LUXURY — centered, gold accents, ultra-slow reveal
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function LuxuryHero() {
    const reveal = (d: number) => ({
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: d, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
    });

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-3xl mx-auto px-6 w-full py-24 text-center">
                <motion.p {...reveal(0.2)}
                    className="font-body text-[10px] tracking-[0.5em] uppercase mb-10"
                    style={{ color: 'var(--accent-1)' }}>
                    FullStack Developer
                </motion.p>
                <motion.div {...reveal(0.45)} className="mb-12">
                    <div className="relative h-44 w-44 md:h-56 md:w-56 mx-auto rounded-full overflow-hidden"
                        style={{ boxShadow: '0 0 0 1px var(--accent-1), 0 0 40px rgba(201,168,76,0.08)' }}>
                        <Image src={OmSarraf} alt="Om Sarraf" width={224} height={224} className="object-cover w-full h-full" priority />
                    </div>
                </motion.div>
                <motion.h1 {...reveal(0.6)}
                    className="font-heading text-5xl sm:text-6xl md:text-7xl font-normal mb-4"
                    style={{ color: 'var(--text-primary)' }}>
                    Om Sarraf
                </motion.h1>
                <motion.div {...reveal(0.75)} className="flex items-center justify-center gap-6 my-8">
                    <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-1), transparent)' }} />
                    <span style={{ color: 'var(--accent-1)', fontSize: '0.7rem' }}>◆</span>
                    <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-1), transparent)' }} />
                </motion.div>
                <motion.p {...reveal(0.9)}
                    className="font-body text-base md:text-lg leading-relaxed max-w-md mx-auto mb-12"
                    style={{ color: 'var(--text-secondary)' }}>
                    Shipping products that matter — from web &amp; mobile apps to AI agents &amp; automation. Worked with clients across the globe.
                </motion.p>
                <motion.div {...reveal(1.05)} className="flex items-center justify-center gap-5 mb-10">
                    {socials.map(({ href, Icon, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                            className="p-2.5 rounded-full border transition-colors duration-500 hover:border-[--accent-1] hover:text-[--accent-1]"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                            <Icon size={16} />
                        </a>
                    ))}
                </motion.div>
                <motion.div {...reveal(1.2)}>
                    <a href="mailto:itsomsarraf@gmail.com"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-theme-pill font-body text-sm tracking-wide border transition-all duration-500 hover:bg-[--accent-1] hover:!text-white hover:border-[--accent-1]"
                        style={{ borderColor: 'var(--accent-1)', color: 'var(--accent-1)' }}>
                        Let&apos;s Talk <GoArrowDownLeft />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

/* ━━━━━━━━ SWITCHER ━━━━━━━━ */
const heroVariants = { brutalist: BrutalistHero, editorial: EditorialHero, neon: NeonHero, luxury: LuxuryHero };

export default function Hero() {
    const { theme } = useTheme();
    const Variant = heroVariants[theme] || BrutalistHero;

    return (
        <AnimatePresence mode="wait">
            <motion.div key={theme} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Variant />
            </motion.div>
        </AnimatePresence>
    );
}
