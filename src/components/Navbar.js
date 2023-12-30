// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-custom-bg-color p-4 fixed w-full z-10">
            <div className="container mx-auto flex items-center justify-center"> {/* Centering the content */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        <FaBars />
                    </button>
                </div>
                <div className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} items-center`}>
                    <Link to="about" className="text-white text-xl hover:text-gray-300 px-4 py-2 inline-block" smooth={true} duration={500}>
                        About
                    </Link>
                    <Link to="skills" className="text-white text-xl hover:text-gray-300 px-4 py-2 inline-block" smooth={true} duration={500}>
                        Skills
                    </Link>
                    <Link to="experience" className="text-white text-xl hover:text-gray-300 px-4 py-2 inline-block" smooth={true} duration={500}>
                        Experience
                    </Link>
                    <Link to="projects" className="text-white text-xl hover:text-gray-300 px-4 py-2 inline-block" smooth={true} duration={500}>
                        Projects
                    </Link>
                    <Link to="contact" className="text-white text-xl hover:text-gray-300 px-4 py-2 inline-block" smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
