'use client';

import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { dummyProjects } from '@/lib/projects';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
function ProjectImage({ src, alt, isBrutalist }) {
	return (
		<Image src={src} width={700} height={440} alt={alt}
			className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03] ${
				isBrutalist ? 'md:grayscale md:group-hover:grayscale-0' : ''
			}`}
			unoptimized />
	);
}

export default function ProjectsPage() {
	const { theme } = useTheme();
	const isBrutalist = theme === 'brutalist';
	return (
		<section className="py-20 md:py-28" style={{ background: 'var(--bg-primary)' }}>
			<div className="max-w-5xl mx-auto px-6 sm:px-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-heading text-3xl md:text-4xl font-bold text-center mb-14 md:mb-20"
					style={{ color: 'var(--text-primary)' }}>
					Projects
				</motion.h2>

				{dummyProjects.map((p, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 35 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
						className={`group flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 mb-16 md:mb-24 items-center`}>

						<div className="w-full md:w-[55%]">
							<a
								href={p.deployedLink || p.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="block overflow-hidden rounded-theme card-shadow card-shadow-hover"
								style={{ border: 'var(--card-border)' }}>
								<ProjectImage src={p.imagePath} alt={p.name} isBrutalist={isBrutalist} />
							</a>
						</div>

						<div className="w-full md:w-[45%]">
							<h3
								className="font-heading text-xl md:text-2xl font-bold mb-2"
								style={{ color: 'var(--text-primary)' }}>
								{p.name}
							</h3>
							<p
								className="font-body text-sm md:text-base leading-relaxed mb-4"
								style={{ color: 'var(--text-secondary)' }}>
								{p.description}
							</p>
							<div className="flex flex-wrap gap-1.5 mb-5">
								{p.techStack.split(',').map((t, j) => (
									<span
										key={j}
										className="font-body text-[11px] font-medium px-2.5 py-1 rounded-theme-pill"
										style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}>
										{t.trim()}
									</span>
								))}
							</div>
							<div className="flex gap-2.5">
								{p.githubLink && (
									<a
										href={p.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1.5 px-4 py-2 rounded-theme-sm font-body text-xs font-semibold transition-opacity hover:opacity-80"
										style={{ background: 'var(--accent-1)', color: 'var(--bg-primary)' }}>
										<BsGithub size={13} /> GitHub
									</a>
								)}
								{p.deployedLink && (
									<a
										href={p.deployedLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1.5 px-4 py-2 rounded-theme-sm font-body text-xs font-semibold border transition-opacity hover:opacity-80"
										style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
										Visit <FiExternalLink size={13} />
									</a>
								)}
							</div>
						</div>
					</motion.div>
				))}

				<div className="text-center mt-8">
					<p className="font-heading text-lg" style={{ color: 'var(--text-muted)' }}>
						More Projects Coming Soon
					</p>
					<p className="font-body text-sm mt-1 italic" style={{ color: 'var(--text-muted)' }}>
						currently working on Samvaad
					</p>
				</div>
			</div>
		</section>
	);
}
