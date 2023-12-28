// src/components/Navbar.js
import React, { useState } from 'react';
import { MobileNav, Typography, IconButton } from "@material-tailwind/react";
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const spaceGroteskRegularStyle = {
    fontFamily: 'Space Grotesk Regular, sans-serif',
};

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [currentPage, setCurrentPage] = useState('About');

    const pages = {
        'About': <About />,
        'Projects': <Projects />,
        'Experience': <Experience />,
        'Contact': <Contact />,
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setOpenNav(false);
    };

    return (
        <div className="bg-custom-bg-color sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between w-full mx-auto text-zinc-200">
                <div className="flex items-center gap-4 mx-auto">
                    <Typography as="button" onClick={() => handlePageChange('About')} className="p-1 font-normal" style={spaceGroteskRegularStyle}>
                        About
                    </Typography>
                    <Typography as="button" onClick={() => handlePageChange('Projects')} className="p-1 font-normal" style={spaceGroteskRegularStyle}>
                        Projects
                    </Typography>
                    <Typography as="button" onClick={() => handlePageChange('Experience')} className="p-1 font-normal" style={spaceGroteskRegularStyle}>
                        Experience
                    </Typography>
                    <Typography as="button" onClick={() => handlePageChange('Contact')} className="p-1 font-normal" style={spaceGroteskRegularStyle}>
                        Contact
                    </Typography>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {pages[currentPage]}
            </MobileNav>
        </div>
    );
};

export default Navbar;
