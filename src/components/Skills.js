// src/components/Skills.js

import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaPhp, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { FaCode, FaUnity, FaGit } from 'react-icons/fa';

const frontEndSkills = [
    { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
    { name: 'React', icon: <FaReact color="#61dafb" /> },
    { name: 'JQuery', icon: <FaCode color="#0769ad" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss color="#06b6d4" /> },
    { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> },
];

const backEndSkills = [
    { name: 'PHP', icon: <FaPhp color="#8a63e5" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68a063" /> },
    { name: 'Python', icon: <FaPython color="#306998" /> },
    { name: 'MySQL', icon: <FaDatabase color="#00758f" /> },
    { name: 'Laragon', icon: <AiFillDatabase color="#ff8c00" /> },
    { name: 'Xampp', icon: <AiFillDatabase color="#ff8c00" /> },
];

const otherSkills = [
    { name: 'Next.js', icon: <FaHtml5 color="#e34c26" /> },
    { name: 'C#', icon: <FaCode color="#68217a" /> },
    { name: 'Unity', icon: <FaUnity color="#c9c9c9" /> },
    { name: 'Git', icon: <FaGit color="#f34f29" /> },
    { name: 'Web Systems', icon: <FaCode color="#c9c9c9" /> },
    { name: 'Websites', icon: <FaCode color="#c9c9c9" /> },
];

const spaceGroteskBoldStyle = {
    fontFamily: 'Space Grotesk Bold, sans-serif',
    fontWeight: 'bold',
};

const SkillCard = ({ title, skills, shimmerClass }) => {
    return (
        <div id="skills" className={`w-full sm:w-6/12 lg:w-4/12  text-gray-200 ${shimmerClass}`}>
            <div className={`p-6 mb-20 transition duration-300 ease-in-out transform hover:bg-purple-600 hover:border-purple-600 border-t-8 border-b-8 border-solid border-purple-500`}>
                <div className="font-bold text-xl mb-4 text-center relative" style={spaceGroteskBoldStyle}>
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
            <h3 className="font-bold text-3xl mb-16 text-center relative text-gray-200" style={spaceGroteskBoldStyle}>
                Skills
            </h3>
            <div className="container mx-auto flex flex-col items-center mb-16 sm:flex-row sm:justify-center lg:flex-row lg:justify-center">
                <SkillCard shimmerClass="hover:animate-shimmer mb-8 sm:mb-0" title="Front-End" skills={frontEndSkills} />
                <SkillCard shimmerClass="hover:animate-shimmer mb-8 sm:mb-0" title="Back-End" skills={backEndSkills} />
                <SkillCard shimmerClass="hover:animate-shimmer mb-8 sm:mb-0" title="Other Skills" skills={otherSkills} />
            </div>
        </div>
    );
};

export default Skills

