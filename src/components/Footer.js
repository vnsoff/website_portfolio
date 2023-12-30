// src/components/Footer.js

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const iconColor = "#8a63e5"; // Set the color to purple-500

    return (
        <footer className="bg-custom-bg-color py-4 border-t-4 border-purple-500">
            <div className="container mx-auto flex justify-center items-center">
                <a
                    href="https://www.linkedin.com/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 mx-4"
                >
                    <FaLinkedin size={24} color={iconColor} />
                </a>
                <a
                    href="https://github.com/your-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 mx-4"
                >
                    <FaGithub size={24} color={iconColor} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
