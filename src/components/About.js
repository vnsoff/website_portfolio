// src/components/About.js

import React from 'react';
import SpaceGroteskBold from '../fonts/SpaceGrotesk-Bold.ttf'; // Import the Space Grotesk Bold font
import SpaceGroteskRegular from '../fonts/SpaceGrotesk-Regular.ttf'; // Import the Space Grotesk Regular font
import { Button } from '@material-tailwind/react'; // Import the Material Tailwind Button component
import profileImage from '../image-url.jpg'; // Import the image

const About = () => {
    const spaceGroteskBoldStyle = {
        fontFamily: 'Space Grotesk Bold, sans-serif', // Use the specific font family for Bold
        fontWeight: 'bold', // Set the font weight to bold
    };

    const spaceGroteskRegularStyle = {
        fontFamily: 'Space Grotesk Regular, sans-serif', // Use the specific font family for Regular
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center h-screen mt-32 lg:mt-0 bg-custom-bg-color">
            <div className="max-w-screen-md px-8 mb-8 lg:mb-0 lg:mr-8 relative">
                <h1 className="text-6xl font-bold mb-4 text-zinc-200" style={spaceGroteskBoldStyle}>
                    Hi, I'm Vanessa Christoff
                </h1>
                <p className="text-2xl mb-8 text-zinc-400" style={spaceGroteskRegularStyle}>
                    I'm a{' '}
                    <span className="relative inline-block">
                        <span className="group cursor-pointer text-purple-500 px-2 py-1 rounded-md" style={spaceGroteskBoldStyle}>
                            Software Engineer
                        </span>
                    </span>{' '}
                    and I work in the security and surveillance industry, as a web applications full-stack developer.
                    My main stack includes PHP, CodeIgniter4, JavaScript, and jQuery. I've also worked on projects that require other languages such as Python and C#.
                    My focus lies in the development of full-stack applications, with a particular emphasis on backend development.
                </p>
                <div className="flex items-center">
                    <button className="text-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform">
                        <span className="mx-4">Check Resume</span>
                    </button>
                </div>
            </div>
            <div className="max-w-screen-md px-8 relative">
                <div className="rounded-full overflow-hidden ring-2 ring-purple-500">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-96 h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
