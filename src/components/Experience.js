

// src/components/Experience.js

import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaPhp, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { FaCode, FaUnity, FaGit } from 'react-icons/fa';

const Experience = () => {
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
    };

    const experiences = [
        {
            jobTitle: 'Software Engineer',
            company: 'High Link',
            period: 'Jun 2023 - Present',
            type: 'Full-time',
            description: 'Full stack development for web systems and mobile applications, creating solutions for our security and surveillance services',
            technologies: ['JavaScript', 'JQuery', 'Bootstrap', 'PHP', 'MySQL', 'Laragon', 'Git'],
        },
        {
            jobTitle: 'IT Assistant',
            company: 'CCSTI',
            period: 'Jan 2023 - May 2023',
            type: 'Full-time',
            description: 'System customer support\n' +
                'Data pairing and reporting\n' +
                'Detect and Report errors in customer and system data integration',
            technologies: ['N-Sight RMM', 'Customer Support', 'Data Analysis'],
        },
        {
            jobTitle: 'Graphic Design Intern',
            company: 'Univali',
            period: 'May 2020 - May 2021',
            type: 'Internship',
            description: '',
            technologies: [],
        },
        {
            jobTitle: 'Game Tester',
            company: 'WebDesigners',
            period: 'Sep 2018 - Feb 2019',
            type: 'Part-time',
            description: 'Game Tester and QA in the game Tetragon (http://www.tetragongame.com/).',
            technologies: ['Game Testing', 'Unity3D'],
        },
        {
            jobTitle: 'Unity Developer Intern',
            company: 'Univali',
            period: 'Mar 2018 - Aug 2018',
            type: 'Internship',
            description: 'Responsible for developing game projects together with colleagues from the programming team.\n' +
                'Responsible for helping other students with their projects.',
            technologies: ['Unity3D', 'C#','Git'],
        },
    ];

    return (
        <div id="experience" className="bg-custom-bg-color py-16">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-200 text-center">
                    Experience
                </h2>
                <div className="grid gap-8">
                    {experiences.map((experience, index) => (
                        <div key={index} className="sm:w-5/6 mx-auto">
                            <div className="p-6 m-4 rounded-lg ring-4 ring-purple-500 shadow-md transition-transform hover:translate-x-2">
                                <div className="flex items-center mb-4">
                                    <div className="ml-4">
                                        <h3 className="text-2xl font-semibold text-gray-200">
                                            {experience.jobTitle}
                                        </h3>
                                        <p className="text-gray-200">{experience.company}</p>
                                        <p className="text-gray-200">{experience.period}</p>
                                        <br />
                                        <p className="text-gray-200">{experience.description}</p>
                                    </div>
                                </div>
                                {experience.technologies.length > 0 && (
                                    <div className="mt-4">
                                        <div className="flex items-center justify-center flex-wrap relative">
                                            {experience.technologies.map((tech, techIndex) => (
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
                            </div>
                            <div className="mt-10 flex items-center justify-center">
                                <div className="animate-bounce-custom-2 w-5 h-5 bg-purple-500 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
