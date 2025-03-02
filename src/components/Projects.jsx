'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { dummyProjects } from '@/lib/projects';
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useInView
} from 'framer-motion';

const TechBadge = ({ tech, index }) => (
	<motion.span
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.3, delay: index * 0.05 }}
		className='px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/10 shadow-sm hover:bg-white/20 transition-all duration-300'>
		{tech.trim()}
	</motion.span>
);

const TechStack = ({ techStack }) => (
	<div className='flex flex-wrap gap-2 mb-6'>
		{techStack.split(',').map((tech, i) => (
			<TechBadge
				key={i}
				tech={tech}
				index={i}
			/>
		))}
	</div>
);

const ProjectLinks = ({ githubLink, deployedLink }) => (
	<div className='flex gap-4'>
		{githubLink && (
			<motion.a
				whileHover={{ scale: 1.05, y: -2 }}
				whileTap={{ scale: 0.95 }}
				href={`${githubLink}?t=${Date.now()}`}
				target='_blank'
				rel='noopener noreferrer'
				className='px-4 py-2 flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg border border-white/10 shadow-lg transition-all duration-300'>
				<BsGithub className='text-white' />
				<span className='font-medium'>GitHub</span>
			</motion.a>
		)}
		{deployedLink && (
			<motion.a
				whileHover={{ scale: 1.05, y: -2 }}
				whileTap={{ scale: 0.95 }}
				href={`${deployedLink}?t=${Date.now()}`}
				target='_blank'
				rel='noopener noreferrer'
				className='px-4 py-2 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300'>
				<span className='font-medium'>Live Demo</span>
				<FiExternalLink className='text-white' />
			</motion.a>
		)}
	</div>
);

const ProjectCard = ({ project, index }) => {
	const cardRef = useRef(null);
	const isInView = useInView(cardRef, { once: false, margin: '-100px 0px' });

	const imageUrl = `${project.imagePath}?t=${Date.now()}`;

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 0.8 }}
			className='relative w-full mb-32 md:mb-48'>
			<div className='max-w-6xl mx-auto'>
				<div
					className={`relative flex flex-col ${
						index % 2 === 0 ? 'md:items-end' : 'md:items-start'
					}`}>
					{/* Project number */}
					<div
						className={`absolute top-0 ${
							index % 2 === 0 ? 'left-0' : 'right-0'
						} -mt-10 md:-mt-20`}>
						<span className='text-8xl md:text-9xl font-bold text-white/5'>
							{(index + 1).toString().padStart(2, '0')}
						</span>
					</div>

					{/* Project image */}
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={
							isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
						}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='w-full md:w-5/6 mb-8 relative z-10'>
						<div className='relative group'>
							<div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
							<div className='relative aspect-video overflow-hidden rounded-xl shadow-2xl'>
								<Image
									src={imageUrl}
									width={1200}
									height={675}
									alt={`${project.name} preview`}
									className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
									unoptimized={true}
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end'>
									<div className='p-6 md:p-8 w-full'>
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3 }}
											className='flex justify-center'>
											<ProjectLinks
												githubLink={project.githubLink}
												deployedLink={project.deployedLink}
											/>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Project details */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className={`absolute bottom-0 ${
							index % 2 === 0 ? 'left-0' : 'right-0'
						} md:w-1/2 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl transform md:translate-y-1/3 z-20`}>
						<h3 className='text-2xl md:text-3xl font-bold mb-3 text-white'>
							{project.name}
						</h3>
						<p className='text-white/80 mb-6 leading-relaxed'>
							{project.description}
						</p>
						<TechStack techStack={project.techStack} />
						<div className='md:hidden'>
							<ProjectLinks
								githubLink={project.githubLink}
								deployedLink={project.deployedLink}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

const Projects = ({ projects }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end end']
	});

	const springScrollY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	const translateY = useTransform(springScrollY, [0, 1], [0, -50]);

	useEffect(() => {
		// Clear browser cache for images
		const clearImageCache = () => {
			const images = document.getElementsByTagName('img');
			for (let img of images) {
				img.src = `${img.src}?t=${Date.now()}`;
			}
		};

		clearImageCache();
	}, []);

	return (
		<div
			ref={ref}
			className='relative bg-gradient-to-b from-gray-900 to-black py-24 md:py-32 px-6 overflow-hidden'>
			{/* Background elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[length:50px_50px]'></div>
				<motion.div
					style={{ y: translateY }}
					className='absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl opacity-30'
				/>
				<motion.div
					style={{ y: useTransform(springScrollY, [0, 1], [0, -100]) }}
					className='absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl opacity-20'
				/>
			</div>

			<div className='container mx-auto relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-20 md:mb-32'>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className='inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-200 border border-white/20'>
						Portfolio
					</motion.div>
					<h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
						Featured Projects
					</h2>
					<p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto'>
						A showcase of my best work, demonstrating my skills and passion for
						creating exceptional digital experiences.
					</p>
				</motion.div>

				<div className='space-y-32 md:space-y-64'>
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
							index={index}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='mt-32 text-center'>
					<div className='relative py-16 px-8 rounded-2xl overflow-hidden'>
						<div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl'></div>
						<div className='relative z-10'>
							<h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
								More Coming Soon
							</h3>
							<p className='text-white/70 text-lg max-w-2xl mx-auto mb-8'>
								Currently building exciting new projects and working with
								clients on innovative solutions. Check back soon for updates!
							</p>
							<motion.a
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								href='mailto:itsomsarraf@gmail.com'
								className='inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 shadow-lg transition-all duration-300'>
								<span>Get in Touch</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

const ProjectsPage = () => <Projects projects={dummyProjects} />;

export default ProjectsPage;
