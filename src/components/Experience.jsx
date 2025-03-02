'use client';
import React, { useState, useRef } from 'react';
import { experiences } from '@/lib/expriences';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const ExperienceItem = ({
	title,
	company,
	location,
	duration,
	description,
	url,
	stack
}) => {
	const itemRef = useRef(null);
	const isInView = useInView(itemRef, { once: true, margin: '-100px 0px' });

	return (
		<motion.div
			ref={itemRef}
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
			exit={{ opacity: 0, y: -30 }}
			transition={{ duration: 0.6 }}
			className='relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-8 overflow-hidden'>
			{/* Background glow effect */}
			<div className='absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg rounded-xl'></div>

			{/* Content */}
			<div className='relative z-10'>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
					<div>
						<h3 className='text-2xl font-bold text-white mb-2 flex items-center'>
							{title}
						</h3>
						<h4 className='text-xl font-medium text-blue-300 mb-1 flex items-center'>
							<a
								href={url}
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-blue-400 transition-colors duration-200 flex items-center'>
								{company}
								<svg
									className='w-4 h-4 ml-1.5 opacity-70'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
									<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
								</svg>
							</a>
						</h4>
						{location && <p className='text-white/60 mb-1'>{location}</p>}
					</div>
					<div className='mt-2 md:mt-0'>
						<span className='inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-200 border border-white/20'>
							{duration}
						</span>
					</div>
				</div>

				<div className='mb-8'>
					<ul className='space-y-4'>
						{description.map((item, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -10 }}
								animate={
									isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
								}
								transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
								className='flex items-start group'>
								<div className='mr-3 mt-1.5 flex-shrink-0'>
									<div className='w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-300 transition-colors duration-200'></div>
								</div>
								<p className='text-white/80 group-hover:text-white transition-colors duration-200 leading-relaxed'>
									{item}
								</p>
							</motion.li>
						))}
					</ul>
				</div>

				{stack && stack.length > 0 && (
					<div>
						<h5 className='text-sm font-semibold text-white/70 mb-4 flex items-center'>
							<svg
								className='w-4 h-4 mr-2 text-blue-400'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M12 2L2 7l10 5 10-5-10-5z'></path>
								<path d='M2 17l10 5 10-5'></path>
								<path d='M2 12l10 5 10-5'></path>
							</svg>
							Technologies
						</h5>
						<div className='flex flex-wrap gap-2'>
							{stack.map((tech, index) => (
								<motion.span
									initial={{ opacity: 0, scale: 0.9 }}
									animate={
										isInView
											? { opacity: 1, scale: 1 }
											: { opacity: 0, scale: 0.9 }
									}
									transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
									key={index}
									className='px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/10 shadow-sm hover:bg-white/20 transition-all duration-300'>
									{tech}
								</motion.span>
							))}
						</div>
					</div>
				)}
			</div>
		</motion.div>
	);
};

const CompanyTab = ({ company, title, duration, isSelected, onClick }) => (
	<motion.button
		whileHover={{ x: 3 }}
		whileTap={{ scale: 0.98 }}
		onClick={onClick}
		className={`w-full text-left px-4 py-4 rounded-lg transition-all duration-300 ${
			isSelected
				? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 text-white'
				: 'text-white/60 hover:text-white/90 hover:bg-white/5'
		}`}>
		<div className='flex items-center'>
			<div
				className={`w-2 h-2 rounded-full mr-3 ${
					isSelected ? 'bg-blue-400' : 'bg-white/30'
				}`}></div>
			<div>
				<div className='font-medium'>{company}</div>
				<div className='text-sm text-white/50 mt-1'>{title}</div>
				<div className='text-xs text-white/40 mt-0.5'>{duration}</div>
			</div>
		</div>
	</motion.button>
);

const Experiences = () => {
	const [selectedCompany, setSelectedCompany] = useState(
		experiences[0].company
	);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

	return (
		<div className='relative bg-gradient-to-b from-black to-gray-900 py-24 md:py-32 px-6 overflow-hidden'>
			{/* Background elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[length:50px_50px]'></div>
				<div className='absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl opacity-20'></div>
				<div className='absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-20'></div>
			</div>

			<div className='container mx-auto relative z-10'>
				<motion.div
					ref={sectionRef}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-20'>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-200 border border-white/20'>
						Career
					</motion.div>
					<h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
						Work Experience
					</h2>
					<p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto'>
						A journey through my professional career, showcasing the skills and
						expertise I've developed along the way.
					</p>
				</motion.div>

				<div className='max-w-6xl mx-auto'>
					<div className='flex flex-col lg:flex-row gap-8'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className='w-full lg:w-1/3'>
							<div className='bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-4 sticky top-24'>
								<h3 className='text-white/80 text-sm uppercase tracking-wider font-semibold mb-4 px-4'>
									Companies
								</h3>
								<div className='space-y-2'>
									{experiences.map((exp) => (
										<CompanyTab
											key={exp.company}
											company={exp.company}
											title={exp.title}
											duration={exp.duration}
											isSelected={selectedCompany === exp.company}
											onClick={() => setSelectedCompany(exp.company)}
										/>
									))}
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className='w-full lg:w-2/3'>
							<AnimatePresence mode='wait'>
								{experiences.find((exp) => exp.company === selectedCompany) && (
									<ExperienceItem
										key={selectedCompany}
										{...experiences.find(
											(exp) => exp.company === selectedCompany
										)}
									/>
								)}
							</AnimatePresence>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experiences;
