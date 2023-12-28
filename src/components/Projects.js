// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard'; // Import your ProjectCard component

const projects = [
    // Define your projects here with details such as title, description, image, etc.
    {
        title: 'Project 1',
        description: 'Description of Project 1.',
        // imageUrl: 'image-url.jpg',
    },
    {
        title: 'Project 2',
        description: 'Description of Project 2.',
        // imageUrl: 'url_to_image_2.jpg',
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default Projects;
