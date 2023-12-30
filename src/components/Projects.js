// src/components/Projects.js

import React from 'react';

const Projects = () => {
    const projects = [
        {
            projectName: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: ['React', 'Node.js', 'MongoDB'],
            thumbnail: 'https://via.placeholder.com/150', // Placeholder image URL
        },
        {
            projectName: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            thumbnail: 'https://via.placeholder.com/150', // Placeholder image URL
        },
        {
            projectName: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            thumbnail: 'https://via.placeholder.com/150', // Placeholder image URL
        },
    ];

    return (
        <div id="projects" className="bg-custom-alt-color py-16">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-200 text-center">
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="">
                            <div className="p-4 flex flex-col  items-center rounded-lg hover:scale-105 shadow-md bg-purple-700">
                                <div className="mb-4">
                                    <img
                                        className="h-52 w-52 object-cover rounded"
                                        src={project.thumbnail}
                                        alt={`${project.projectName} Thumbnail`}
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-gray-200">
                                        {project.projectName}
                                    </h3>
                                    <p className="text-gray-200">{project.description}</p>
                                </div>
                                {project.technologies.length > 0 && (
                                    <div className="mt-4">
                                        <div className="flex items-center justify-center flex-wrap relative">
                                            {project.technologies.map((tech, techIndex) => (
                                                <div key={techIndex} className="p-2 flex items-center">
                                                    <div className="rounded-full p-4 border border-gray-200 flex items-center text-gray-200">
                                                        {tech}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
