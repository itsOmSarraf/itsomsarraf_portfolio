'use client';

import React, { useRef, useEffect } from 'react';
import { experiences } from '@/lib/expriences';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PEEK = 18;

export default function Experiences() {
	const containerRef = useRef(null);
	const innerRef = useRef(null);
	const deckRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const total = experiences.length;
			const cards = deckRef.current.querySelectorAll('.exp-card');
			let maxHeight = 0;
			cards.forEach((card) => {
				if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
			});
			cards.forEach((card) => {
				card.style.height = `${maxHeight}px`;
			});
			deckRef.current.style.height = `${maxHeight}px`;
			const deckHeight = maxHeight;

			gsap.set(cards[0], { zIndex: 1 });

			for (let i = 1; i < total; i++) {
				gsap.set(cards[i], {
					y: deckHeight + 100,
					zIndex: i + 1,
				});
			}

			const dur = 0.6;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'center center',
					end: `+=${(total - 1) * 50}%`,
					pin: innerRef.current,
					pinSpacing: true,
					scrub: true,
					anticipatePin: 1,
				},
			});

			for (let i = 1; i < total; i++) {
				const t = (i - 1) * dur;
				tl.to(cards[i], {
					y: i * PEEK,
					duration: dur,
					ease: 'none',
				}, t);
			}
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative"
			style={{ background: 'var(--bg-secondary)' }}>
			<div ref={innerRef} className="min-h-screen flex flex-col justify-center py-16 md:py-20">
				<h2
					className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
					style={{ color: 'var(--text-primary)' }}>
					Work Experience
				</h2>

				<div
					className="max-w-3xl mx-auto w-full px-6 sm:px-10 overflow-hidden"
					style={{ paddingBottom: `${(experiences.length - 1) * PEEK + 8}px` }}>
					<div ref={deckRef} className="relative">
						{experiences.map((exp, i) => (
							<div
								key={exp.company}
								className={`exp-card rounded-theme p-5 md:p-7 card-shadow ${i === 0 ? 'relative' : 'absolute inset-x-0 top-0'}`}
								style={{
									background: 'var(--card-bg)',
									border: 'var(--card-border)',
									willChange: 'transform',
								}}>
								<div className="flex items-start justify-between gap-4 mb-1">
									<h3
										className="font-heading text-lg md:text-xl font-bold leading-tight"
										style={{ color: 'var(--text-primary)' }}>
										{exp.title}
									</h3>
							<span className="font-body text-xs whitespace-nowrap flex-shrink-0">
								{exp.duration.includes('Present') ? (
									<>
										<span style={{ color: 'var(--text-primary)' }}>
											{exp.duration.split('Present')[0]}
										</span>
										<span className="font-semibold" style={{ color: '#e53e3e' }}>Present</span>
									</>
								) : (
									<span style={{ color: 'var(--text-primary)' }}>{exp.duration}</span>
								)}
							</span>
								</div>

								<p className="font-body text-sm mb-3">
									<a
										href={exp.url}
										target="_blank"
										rel="noopener noreferrer"
										className="font-semibold hover:opacity-80 transition-opacity"
										style={{ color: 'var(--accent-1)' }}>
										{exp.company}
									</a>
									{exp.location && (
										<span style={{ color: 'var(--text-muted)' }}>
											{' '}· {exp.location}
										</span>
									)}
								</p>

								<div className="space-y-1.5 mb-4">
									{exp.description.map((d, j) => (
										<div
											key={j}
											className="flex gap-2.5 font-body text-sm leading-relaxed"
											style={{ color: 'var(--text-secondary)' }}>
											<span
												className="flex-shrink-0 mt-[7px] w-1 h-1 rounded-full"
												style={{ background: 'var(--accent-1)' }}
											/>
											{d}
										</div>
									))}
								</div>

								{/* {exp.stack?.length > 0 && (
									<div className="flex flex-wrap gap-1.5">
										{exp.stack.map((t, j) => (
											<span
												key={j}
												className="font-body text-[11px] font-medium px-2.5 py-1 rounded-theme-pill"
												style={{
													background: 'var(--tag-bg)',
													color: 'var(--tag-text)',
												}}>
												{t}
											</span>
										))}
									</div>
								)} */}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
