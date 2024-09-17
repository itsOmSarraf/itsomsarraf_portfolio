import React from 'react';
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => (
    <div className={`relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} md:flex items-center mb-24`}>
        <div className="md:w-3/5 lg:w-2/3 relative">
            <Image
                src={project.imagePath}
                width={800}
                height={500}
                alt={`${project.name} preview`}
                className="w-full h-auto object-cover rounded-xl shadow-md"
            />
            <div className="absolute inset-0 bg-black opacity-50 md:opacity-0 rounded-xl"></div>
        </div>
        <div className={`bg-white bg-opacity-90 md:bg-opacity-100 p-6 rounded-xl shadow-lg border border-gray-200 
                    absolute inset-0 md:inset-auto md:top-10 ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} md:w-1/2 lg:w-2/5 
                    flex flex-col justify-center md:block ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">{project.name}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.split(',').map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">{tech.trim()}</span>
                ))}
            </div>
            <p className="text-sm text-gray-600 mb-4">{project.dateCreated}</p>
            <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} gap-3`}>
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <BsGithub className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer text-xl" />
                    </a>
                )}
                {project.deployedLink && (
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer text-xl" />
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Projects = ({ projects }) => {
    return (
        <div className="bg-gray-50 py-12">
            <h2 className="font-bold text-3xl text-center mb-12 text-gray-900">
                Projects
            </h2>
            <div className="max-w-5xl mx-auto px-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

// Dummy data array
const dummyProjects = [
    {
        name: "Project Alpha",
        imagePath: "https://picsum.photos/id/0/800/500",
        techStack: "React, Node.js, MongoDB",
        githubLink: "https://github.com/user/project-alpha",
        deployedLink: "https://project-alpha.com",
        description: "A full-stack web application for managing personal finances with real-time updates and intuitive visualizations.",
        dateCreated: "June 2023"
    },
    {
        name: "Project Beta",
        imagePath: "https://picsum.photos/id/1/800/500",
        techStack: "Vue.js, Express, PostgreSQL",
        githubLink: "https://github.com/user/project-beta",
        deployedLink: "https://project-beta.com",
        description: "An e-commerce platform with real-time inventory management and AI-powered product recommendations.",
        dateCreated: "September 2023"
    },
    {
        name: "Project Gamma",
        imagePath: "https://picsum.photos/id/2/800/500",
        techStack: "Angular, Django, MySQL",
        githubLink: "https://github.com/user/project-gamma",
        deployedLink: "https://project-gamma.com",
        description: "A collaborative task management tool with integrated chat functionality and project analytics dashboard.",
        dateCreated: "December 2023"
    }
];

// Example usage
const ProjectsPage = () => <Projects projects={dummyProjects} />;

export default ProjectsPage;