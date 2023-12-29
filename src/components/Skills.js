import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaPhp, FaNodeJs, FaPython } from 'react-icons/fa';

const frontEndSkills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    // Add more front-end skills as needed
];

const backEndSkills = [
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    // Add more back-end skills as needed
];

const otherSkills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    // Add more front-end skills as needed
];

const SkillCard = ({ title, skills, shimmerClass }) => {
    return (
        <div className={`w-full lg:w-6/12 xl:w-4/12 my-32 mx-2 shadow-lg text-gray-200 relative overflow-hidden ${shimmerClass}`}>
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
        <div className="py-24 flex items-center justify-center h-full bg-custom-alt-color">
            <div className="flex flex-wrap justify-center">
                <SkillCard shimmerClass="hover:animate-shimmer" title="Front-End" skills={frontEndSkills} />
                <SkillCard shimmerClass="hover:animate-shimmer" title="Back-End" skills={backEndSkills} />
                <SkillCard shimmerClass="hover:animate-shimmer" title="Other Skills" skills={otherSkills} />
            </div>
        </div>
    );
};

export default Skills;
