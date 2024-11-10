'use client';
import React, { useState } from 'react';
import { experiences } from '@/lib/expriences';

const ExperienceItem = ({
	title,
	company,
	location,
	duration,
	description,
	url,
	stack
}) => (
	<div className='mb-8 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
		<h3 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h3>
		<h4 className='text-lg font-medium text-gray-700 mb-1'>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				className='hover:text-blue-600 transition-colors duration-200'>
				{company}
			</a>
			{location && ` - ${location}`}
		</h4>
		<p className='text-sm text-gray-600 mb-4'>{duration}</p>
		<ul className='list-none pl-0 mb-6 space-y-3'>
			{description.map((item, index) => (
				<li
					key={index}
					className='flex items-start group'>
					<span className='text-blue-500 mr-2 transform group-hover:translate-x-1 transition-transform duration-200'>
						▹
					</span>
					<span className='text-gray-600 group-hover:text-gray-800 transition-colors duration-200'>
						{item}
					</span>
				</li>
			))}
		</ul>
		{stack && stack.length > 0 && (
			<div>
				<h5 className='text-sm font-semibold text-gray-700 mb-3'>Tech Stack</h5>
				<div className='flex flex-wrap gap-2'>
					{stack.map((tech, index) => (
						<span
							key={index}
							className='bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors duration-200'>
							{tech}
						</span>
					))}
				</div>
			</div>
		)}
	</div>
);

const Experiences = () => {
	const [selectedCompany, setSelectedCompany] = useState(
		experiences[0].company
	);

	return (
		<div className='bg-gray-50 py-12 md:py-20'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-800 text-center'>
					Work Experience
				</h2>
				<div className='flex flex-col md:flex-row-reverse gap-8'>
					<div className='w-full md:w-3/4'>
						{experiences.find((exp) => exp.company === selectedCompany) && (
							<ExperienceItem
								{...experiences.find((exp) => exp.company === selectedCompany)}
							/>
						)}
					</div>
					<div className='w-full md:w-1/4'>
						<div className='sticky top-8'>
							<ul className='list-none pl-0 md:border-l md:border-gray-300 space-y-1'>
								{experiences.map((exp) => (
									<li
										key={exp.company}
										className={`pl-4 py-3 cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-r ${
											selectedCompany === exp.company
												? 'text-blue-600 font-semibold border-l-2 border-blue-600 bg-blue-50 hover:bg-blue-50'
												: 'text-gray-600 hover:text-gray-800'
										}`}
										onClick={() => setSelectedCompany(exp.company)}>
										<div className='flex flex-col'>
											<span className='text-sm font-medium'>{exp.title}</span>
											<span className='text-xs mt-1 text-gray-500'>
												{exp.duration}
											</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experiences;
