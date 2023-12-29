import React from 'react';
import { FaReact,FaHtml5, FaCss3, FaJs, FaPhp, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { FaCode,FaUnity, FaGit } from 'react-icons/fa'; // Corrected import

// const mainStack = [
//     { name: 'PHP', icon: <FaPhp color="#8a63e5" /> },
//     { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> }, // Yellow color for JavaScript
//     { name: 'JQuery', icon: <FaCode color="#0769ad" /> }, // Blue color for JQuery
//     { name: 'MySQL', icon: <FaDatabase color="#00758f" /> }, // Dark Teal color for MySQL
//     { name: 'Laragon', icon: <AiFillDatabase color="#ff8c00" /> }, // Dark Orange color for Laragon
//     { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> }, // Purple color for Bootstrap
// ];

const frontEndSkills = [
    { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
    { name: 'React', icon: <FaReact color="#61dafb" /> }, // Light Blue color for React
    { name: 'JQuery', icon: <FaCode color="#0769ad" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss color="#06b6d4" /> }, // Turquoise color for TailwindCSS
    { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> },
];

const backEndSkills = [
    { name: 'PHP', icon: <FaPhp color="#8a63e5" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68a063" /> }, // Green color for Node.js
    { name: 'Python', icon: <FaPython color="#306998" /> }, // Dark Blue color for Python
    { name: 'MySQL', icon: <FaDatabase color="#00758f" /> },
    { name: 'Laragon', icon: <AiFillDatabase color="#ff8c00" /> },
];

const otherSkills = [
    { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> }, // Red-Orange color for HTML
    { name: 'CSS', icon: <FaCss3 color="#2965f1" /> }, // Blue color for CSS
    { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
    { name: 'C#', icon: <FaCode color="#68217a" /> }, // Dark Purple color for C#
    { name: 'Unity', icon: <FaUnity color="#000000" /> }, // Black color for Unity
    { name: 'Git', icon: <FaGit color="#f34f29" /> }, // Red-Orange color for Git
];

const SkillCard = ({ title, skills, shimmerClass }) => {
    return (
        <div className={` items-center w-full lg:w-6/12 xl:w-4/12 xl:px-2 lg:px-28 sm:px-28 shadow-lg text-gray-200 relative overflow-hidden ${shimmerClass}`}>
            <div className={`p-6 transition duration-300 ease-in-out transform hover:bg-purple-600 hover:border-purple-600 border-l-4 border-r-4 border-t-4 border-b-2 border-solid border-purple-500`}>
                <div className="font-bold text-2xl mb-4 text-center relative">
                    {title}
                </div>
                <div className="flex items-center justify-center flex-wrap relative">
                    {skills.map((skill, index) => (
                        <div key={index} className="p-2 flex items-center">
                            <div className="rounded-full p-4 border border-gray-200 flex items-center">
                                {skill.icon}
                                <span className="ml-2">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="py-32 h-full bg-custom-alt-color">
            <h3 className="font-bold text-2xl mb-16 text-center relative text-gray-200">Skills</h3>
            <div className="container mx-auto flex flex-col items-center mb-16 sm:flex-row sm:justify-center lg:flex-row lg:justify-center">
                {/*<SkillCard shimmerClass="hover:animate-shimmer mb-28 sm:mb-0" title="Stack" skills={mainStack} />*/}
                <SkillCard shimmerClass="hover:animate-shimmer mb-28 sm:mb-0" title="Front-End" skills={frontEndSkills} />
                <SkillCard shimmerClass="hover:animate-shimmer mb-28 sm:mb-0" title="Back-End" skills={backEndSkills} />
                <SkillCard shimmerClass="hover:animate-shimmer mb-28 sm:mb-0" title="Other Skills" skills={otherSkills} />
            </div>
        </div>
    );
};

export default Skills;
