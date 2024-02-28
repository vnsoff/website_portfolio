import React from 'react';
import img1 from '../images/img1.PNG';
import img2 from '../images/img2.PNG';
import { FaReact, FaHtml5, FaCss3, FaJs, FaPhp, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { FaCode, FaUnity, FaGit } from 'react-icons/fa';

const Projects = () => {
    const technologyIcons = {
        JavaScript: <FaJs color="#f0db4f"/>,
        React: <FaReact color="#61dafb" />,
        JQuery: <FaCode color="#0769ad" />,
        Bootstrap: <SiBootstrap color="#7952b3" />,
        PHP: <FaPhp color="#8a63e5" />,
        MySQL: <FaDatabase color="#00758f" />,
        Laragon: <AiFillDatabase color="#ff8c00" />,
        Git: <FaGit color="#f34f29" />,
        Unity3D: <FaUnity color="#c9c9c9" />,
        'C#': <FaCode color="#c9c9c9" />,
        Python: <FaPython color="#3776AB" />,
        CSS: <FaCss3 color="#1572B6" />,
        TailwindCSS: <SiTailwindcss color="#38B2AC" />,
        HTML: <FaHtml5 color="#E34F26" />,
    };

    const projects = [
        {
            projectName: 'Restaurant Website',
            description: 'A sophisticated, React-based single-page application (SPA) designed to showcase multiple sections seamlessly. Emphasizing user experience (UX) and functionality, this application offers users an intuitive and immersive journey through a traditional Italian restaurant.',
            technologies: ['JavaScript', 'React', 'TailwindCSS'],
            thumbnail: img1,
            link: 'https://vnsoff.github.io/website-alba/',
            source: 'https://github.com/vnsoff/website-alba/',
        },
        {
            projectName: 'Tech Company Website',
            description: 'A multi-page website showcasing the company\'s advanced solutions, services, and expertise across various technological domains.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            thumbnail: img2,
            link: 'https://vnsoff.github.io/BusinessPage/',
        },
        {
            projectName: 'OCR Image Recognition and Text Extractor',
            description: 'A tool for extracting text from images using OCR technology. It uses Tesseract OCR to convert PNG images into text and SpaCy for text extraction.',
            technologies: ['PHP', 'Python'],
            source: 'https://github.com/vnsoff/ocr-project/',
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
                            <div className="p-4 flex flex-col items-center rounded-lg hover:scale-105 shadow-md bg-purple-800">
                                {project.thumbnail && (
                                    <div className="mt-4">
                                        <img
                                            className="h-52 w-52 object-cover rounded"
                                            src={project.thumbnail}
                                            alt={`${project.projectName} Thumbnail`}
                                        />
                                    </div>
                                )}
                                <div className="mt-4 text-center">
                                    <h3 className="text-2xl font-semibold text-gray-200">
                                        {project.projectName}
                                    </h3>
                                    <p className="mt-4 text-left text-gray-200">{project.description}</p>
                                </div>
                                {project.technologies.length > 0 && (
                                    <div className="mt-4">
                                        <div className="flex items-center justify-center flex-wrap relative">
                                            {project.technologies.map((tech, techIndex) => (
                                                <div key={techIndex} className="p-2 flex items-center">
                                                    <div className="rounded-full p-4 border border-gray-200 flex items-center text-gray-200">
                                                        {technologyIcons[tech] || ''}
                                                        <span className="ml-2">{tech}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {project.link && (
                                    <div className="mt-4">
                                        <a
                                            href={project.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform"
                                        >
                                            Demo
                                        </a>
                                    </div>
                                )}
                                {project.source && (
                                    <div className="mt-4">
                                        <a
                                            href={project.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform"
                                        >
                                            Source Code
                                        </a>
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
