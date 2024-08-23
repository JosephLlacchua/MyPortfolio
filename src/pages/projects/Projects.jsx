﻿// src/pages/projects/Projects.jsx
import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import webMaster1 from '../../assets/Project-1/project_1.1.png';
import webMaster2 from '../../assets/Project-1/project_1.2.png';
import webMaster3 from '../../assets/Project-1/project_1.3.png';
import webMaster4 from '../../assets/Project-1/project_1.4.png';
import webMaster5 from '../../assets/Project-1/project_1.5.png';
import matPlayOpen1 from '../../assets/Project-2/project_2.1.png';
import matPlayOpen2 from '../../assets/Project-2/project_2.2.png';
import matPlayOpen3 from '../../assets/Project-2/project_2.3.png';
import matPlayOpen4 from '../../assets/Project-2/project_2.4.png';
import matPlayOpen5 from '../../assets/Project-2/project_2.5.png';
import matPlayOpen6 from '../../assets/Project-2/project_2.6.png';
import matPlayOpen7 from '../../assets/Project-2/project_2.7.png';

export const Projects = () => {
    const [showMore] = useState(false);

    const projects = [
        {
            imageSrcs: [webMaster1, webMaster2, webMaster3, webMaster4, webMaster5],
            title: 'Web Master',
            description: 'Web Master es una plataforma web intuitiva y fácil de usar que permite a las empresas publicar proyectos de software y a los desarrolladores freelance postularse para trabajar en ellos. Desarrollada con Vue, .NET, MySQL y Bootstrap, esta aplicación busca satisfacer la demanda de soluciones digitales de calidad y la necesidad de los desarrolladores freelance de encontrar proyectos para generar ingresos.',
            technologies: ['Vue', '.NET', 'MySQL', 'Bootstrap'],
            repositoryLink: 'https://github.com/user/velouria',
            demoLink: 'https://velouria-demo.com',
        },
        {
            imageSrcs: [matPlayOpen1, matPlayOpen2, matPlayOpen3, matPlayOpen4, matPlayOpen5, matPlayOpen6, matPlayOpen7],
            title: 'MathPlayOpen',
            description: 'MathPlayOpen es un juego educativo de matemáticas en 2D diseñado para ofrecer una experiencia interactiva, motivadora y personalizable. Desarrollado con Angular, TypeScript y JSON Fake API, este juego ayuda a los estudiantes a mejorar sus habilidades matemáticas de manera efectiva y divertida, abordando la falta de motivación y los métodos tradicionales de enseñanza monótonos.',
            technologies: ['Angular', 'TypeScript', 'JSON Fake API'],
            repositoryLink: 'https://github.com/user/another-project',
            demoLink: 'https://another-project-demo.com',
        },
    ];

    return (
        <div id="projects" className="w-screen h-auto p-6 md:p-14 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                    Proyectos
                </h2>
                <div className='w-full flex flex-col items-center space-y-6'>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imageSrcs={project.imageSrcs}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            repositoryLink={project.repositoryLink}
                            demoLink={project.demoLink}
                            showMore={showMore}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};