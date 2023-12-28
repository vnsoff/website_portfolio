// src/components/ProjectCard.js

import React from 'react';

const ProjectCard = ({ project }) => {
    const { title, description, imageUrl } = project;

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <img src={imageUrl} alt={title} className="w-full h-32 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ProjectCard;
