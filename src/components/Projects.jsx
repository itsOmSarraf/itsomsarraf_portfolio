import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { dummyProjects } from '@/lib/projects';

const TechStack = ({ techStack }) => (
	<div className='flex flex-wrap gap-2 mb-4'>
		{techStack.split(',').map((tech, i) => (
			<span
				key={i}
				className='px-2 py-1 bg-gray-200 font-semibold text-black rounded text-xs'>
				{tech.trim()}
			</span>
		))}
	</div>
);

const ProjectLinks = ({ githubLink, deployedLink }) => (
	<div className='flex justify-start gap-3'>
		{githubLink && (
			<a
				href={githubLink}
				target='_blank'
				rel='noopener noreferrer'
				className='px-2 p-1 gap-2 flex justify-center items-center bg-black rounded-md hover:bg-gray-900 hover:scale-105 text-white transition-all duration-200'>
				<div className='flex justify-center items-center'>
					<BsGithub className='text-white text-sm' />
				</div>
				<p className='text-sm'>Github</p>
			</a>
		)}
		{deployedLink && (
			<a
				href={deployedLink}
				target='_blank'
				rel='noopener noreferrer'
				className='px-2 p-1 gap-2 flex justify-center items-center bg-black rounded-md hover:bg-gray-900 hover:scale-105 text-white transition-all duration-200'>
				<p className='text-sm'>Visit</p>
				<div className='flex justify-center items-center'>
					<FiExternalLink className='text-white text-sm' />
				</div>
			</a>
		)}
	</div>
);

const ProjectCard = ({ project, index }) => (
	<div
		className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
			index % 2 !== 0 ? 'md:flex-row-reverse' : ''
		}`}>
		<div className='w-full md:w-3/5 lg:w-2/3 relative mb-0 group'>
			<div className='bg-white rounded-xl shadow-lg border border-gray-200 p-4 transition-all duration-300 hover:shadow-xl'>
				<div className='relative'>
					<a
						href={project.deployedLink || project.githubLink}
						target='_blank'
						rel='noopener noreferrer'
						className='cursor-pointer'>
						<Image
							src={project.imagePath}
							width={800}
							height={500}
							alt={`${project.name} preview`}
							className='w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02] hover:scale-[1.02]'
						/>
						<div className='hidden md:block absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
					</a>
				</div>

				<div className='md:hidden mt-4 space-y-4'>
					<h3 className='text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600'>
						{project.name}
					</h3>
					<p className='text-sm text-gray-700 leading-relaxed'>
						{project.description}
					</p>
					<TechStack techStack={project.techStack} />
					<ProjectLinks
						githubLink={project.githubLink}
						deployedLink={project.deployedLink}
					/>
				</div>
			</div>
		</div>
		<div
			className={`hidden md:flex w-full md:w-1/2 lg:w-2/5 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 
                md:absolute md:top-10 ${
									index % 2 === 0 ? 'md:right-0' : 'md:left-0'
								} 
                flex-col justify-center ${
									index % 2 === 0 ? 'md:text-right' : 'md:text-left'
								}
                transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl`}>
			<h3 className='mb-3 text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600'>
				{project.name}
			</h3>
			<p className='text-sm text-gray-700 leading-relaxed mb-4'>
				{project.description}
			</p>
			<TechStack techStack={project.techStack} />
			<ProjectLinks
				githubLink={project.githubLink}
				deployedLink={project.deployedLink}
			/>
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
				<div className='text-center mt-12 mb-8 italic'>
					<p className='text-gray-600 text-xl'>
						More Projects Coming Soon
						<span className='block mt-2 text-md text-gray-500 italic'>
							Currently focused on academic and client projects. Check back
							later!
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

const ProjectsPage = () => <Projects projects={dummyProjects} />;

export default ProjectsPage;
