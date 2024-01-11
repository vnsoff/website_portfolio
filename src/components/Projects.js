// src/components/Projects.js

import React from 'react';
import img1 from '../images/img1.PNG';
import img2 from '../images/img2.PNG';

const Projects = () => {
    const projects = [
        {
            projectName: 'Website',
            description: 'Website for a italian restaurant.',
            technologies: ['Javascript','React','TailwindCSS'],
            thumbnail: img1,
            link: 'https://vnsoff.github.io/website-alba/',
        },
        {
            projectName: 'Website',
            description: 'Website for a tech company.',
            technologies: ['Javascript','HTML','CSS'],
            thumbnail: img2,
            link: 'https://vnsoff.github.io/BusinessPage/',  // Specify the link for the first project
        },
    ];

    return (
        <div id="projects" className="bg-custom-alt-color py-16">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-200 text-center">
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20">
                    {projects.map((project, index) => (
                        <div key={index} className="">
                            <div className="p-4 flex flex-col  items-center rounded-lg hover:scale-105 shadow-md bg-purple-700">
                                <div className="mb-4">
                                    <img
                                        className="h-52 w-52 object-cover rounded "
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
                                <div className="mt-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform"
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
