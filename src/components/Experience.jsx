'use client';
import React, { useState } from 'react';

import { experiences } from '@/lib/expriences';

const ExperienceItem = ({
	title,
	company,
	location,
	duration,
	description,
	url
}) => (
	<div className='mb-8 bg-white rounded-lg shadow-md p-6'>
		<h3 className='text-xl font-semibold text-gray-800'>{title}</h3>
		<h4 className='text-lg font-medium text-gray-700'>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				className='hover:underline text-gray-600'>
				{company}
			</a>
			{location && ` - ${location}`}
		</h4>
		<p className='text-sm text-gray-600 mb-4'>{duration}</p>
		<ul className='list-none pl-0'>
			{description.map((item, index) => (
				<li
					key={index}
					className='mb-2 flex items-start'>
					<span className='text-gray-700 mr-2'>▹</span>
					<span className='text-gray-600'>{item}</span>
				</li>
			))}
		</ul>
	</div>
);

const Experiences = () => {
	const [selectedCompany, setSelectedCompany] = useState(
		experiences[0].company
	);

	return (
		<div className='bg-gray-100 py-8 md:py-16'>
			<div className='container mx-auto px-4'>
				<h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800'>
					Work Experience
				</h2>
				<div className='flex flex-col md:flex-row'>
					<div className='w-full md:w-1/4 mb-4 md:mb-0'>
						<ul className='list-none pl-0 md:border-l md:border-gray-300'>
							{experiences.map((exp) => (
								<li
									key={exp.company}
									className={`mb-2 pl-4 py-2 cursor-pointer transition-colors duration-200 ${
										selectedCompany === exp.company
											? 'text-gray-800 font-semibold border-l-2 border-gray-800 bg-gray-200 md:bg-transparent'
											: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
									}`}
									onClick={() => setSelectedCompany(exp.company)}>
									{exp.company}
								</li>
							))}
						</ul>
					</div>
					<div className='w-full md:w-3/4 md:pl-8'>
						{experiences.find((exp) => exp.company === selectedCompany) && (
							<ExperienceItem
								{...experiences.find((exp) => exp.company === selectedCompany)}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experiences;
