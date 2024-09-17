import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { dummyProjects } from '@/lib/projects';

const ProjectCard = ({ project, index }) => (
	<div
		className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
			index % 2 !== 0 ? 'md:flex-row-reverse' : ''
		}`}>
		<div className='w-full md:w-3/5 lg:w-2/3 relative mb-6 md:mb-0 group'>
			<Image
				src={project.imagePath}
				width={800}
				height={500}
				alt={`${project.name} preview`}
				className='w-full h-auto object-cover rounded-xl shadow-md'
			/>
			<div className='hidden md:block absolute inset-0 bg-white opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-xl'></div>
		</div>
		<div
			className={`w-full md:w-1/2 lg:w-2/5 bg-white p-6 rounded-xl shadow-lg border border-gray-200 
                md:absolute md:top-10 ${
									index % 2 === 0 ? 'md:right-0' : 'md:left-0'
								} 
                flex flex-col justify-center ${
									index % 2 === 0 ? 'md:text-right' : 'md:text-left'
								}`}>
			<h3 className='mb-3 text-xl font-semibold text-gray-800'>
				{project.name}
			</h3>
			<p className='text-sm text-gray-700 leading-relaxed mb-4'>
				{project.description}
			</p>
			<div className='flex flex-wrap gap-2 mb-4 justify-center md:justify-start'>
				{project.techStack.split(',').map((tech, i) => (
					<span
						key={i}
						className='px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs'>
						{tech.trim()}
					</span>
				))}
			</div>
			<p className='text-sm text-gray-600 mb-4 text-center md:text-left'>
				{project.dateCreated}
			</p>
			<div className='flex justify-center md:justify-start gap-3'>
				{project.githubLink && (
					<a
						href={project.githubLink}
						target='_blank'
						rel='noopener noreferrer'
						className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200'>
						<BsGithub className='text-gray-600 text-xl' />
					</a>
				)}
				{project.deployedLink && (
					<a
						href={project.deployedLink}
						target='_blank'
						rel='noopener noreferrer'
						className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200'>
						<FiExternalLink className='text-gray-600 text-xl' />
					</a>
				)}
			</div>
		</div>
	</div>
);

const Projects = ({ projects }) => {
	return (
		<div className='bg-gray-50 py-12 px-4 md:px-0'>
			<h2 className='font-bold text-2xl md:text-3xl text-center mb-8 md:mb-12 text-gray-900'>
				Projects
			</h2>
			<div className='max-w-5xl mx-auto'>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

const ProjectsPage = () => <Projects projects={dummyProjects} />;

export default ProjectsPage;
