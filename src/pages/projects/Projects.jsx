// src/pages/projects/Projects.jsx
import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import webMaster1 from '../../assets/Project-1/project_1.1.png';
import webMaster2 from '../../assets/Project-1/project_1.2.png';
import webMaster3 from '../../assets/Project-1/project_1.3.png';
import webMaster4 from '../../assets/Project-1/project_1.4.png';
import webMaster5 from '../../assets/Project-1/project_1.5.png';
import examify1 from '../../assets/Project-3/project_3.1.png';
import examify2 from '../../assets/Project-3/project_3.2.png';
import examify3 from '../../assets/Project-3/project_3.3.png';
import examify4 from '../../assets/Project-3/project_3.4.png';
import examify5 from '../../assets/Project-3/project_3.5.png';
import examify6 from '../../assets/Project-3/project_3.6.png';
import examify7 from '../../assets/Project-3/project_3.7.png';
import examify8 from '../../assets/Project-3/project_3.8.png';
import examify10 from '../../assets/Project-3/project_3.9.png';

export const Projects = () => {
    const [showMore] = useState(false);

    const projects = [
        {
            imageSrcs: [],
            title: 'InnControl',
            description: 'Desarrollo de una solución de gestión integral para el sector hotelero, optimizando procesos administrativos y de atención al cliente. Migración de una arquitectura monolítica a microservicios, mejorando la escalabilidad y el rendimiento del sistema.',
            technologies: ['Java', 'Spring Boot', 'JWT', 'Docker', 'Azure', 'Swagger', 'WebFlux', 'Kubernetes'],
            logros: [
                'Migración exitosa a microservicios para mejorar escalabilidad.',
                'Implementación de Docker y Kubernetes para gestión y orquestación de contenedores.',
                'Optimización de APIs con WebFlux y documentación con Swagger.'
            ],
            demoLink: 'https://inncontrolapp.netlify.app/',
            repositoryLink : '  '
        },
        {
            imageSrcs: [],
            title: 'UniRider',
            description: 'Desarrollo de un sistema web para carpooling entre estudiantes, facilitando la coordinación de viajes y reduciendo costos de transporte. Implementación basada en una arquitectura hexagonal para una clara separación entre el dominio y la infraestructura técnica.',
            technologies: ['Java', 'Spring Boot', 'Arquitectura Hexagonal', 'Docker', 'Kubernetes', 'Swagger', 'Azure'],
            logros: [
                'Arquitectura hexagonal que facilita la adaptabilidad y flexibilidad del sistema.',
                'Creación de un sistema eficiente para coordinación de viajes compartidos.',
                'Despliegue continuo utilizando Docker y Kubernetes.'
            ],
            demoLink: 'https://uniriderapp.netlify.app/',
            repositoryLink : '  '
        },
        {
            imageSrcs: [],
            title: 'FromZeroApi',
            description: 'Plataforma para conectar empresas con freelancers, permitiendo la publicación de ofertas laborales. Implementación con una arquitectura basada en Domain-Driven Design (DDD) para garantizar una separación robusta de dominios.',
            technologies: ['Java', 'Spring Boot', 'DDD', 'Kotlin', 'MySQL', 'Docker', 'Render', 'JWT', 'Swagger'],
            logros: [
                'Implementación de DDD para mejorar la mantenibilidad y evolución del software.',
                'APIs seguras con JWT, optimizando la protección de datos.',
                'Integración eficiente con el frontend en Kotlin.'
            ],
            repositoryLink : '  '
        },
        {
            imageSrcs: [],
            title: 'InkaMarket',
            description: 'Plataforma e-commerce que conecta agricultores peruanos con consumidores finales, mejorando la cadena de suministro. Implementación de una arquitectura de tres capas en Azure para mayor seguridad, escalabilidad y mantenimiento.',
            technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Azure'],
            logros: [
                'Arquitectura de tres capas en Azure, facilitando el mantenimiento y escalabilidad.',
                'Integración de Spring Boot y MySQL para un manejo de datos eficiente y seguro.',
                'Despliegue optimizado en Azure, asegurando alta disponibilidad.'
            ],
            repositoryLink : '  '

        },
        {
            imageSrcs: [examify1, examify2, examify3, examify4, examify5, examify6, examify7, examify8, examify10],
            title: 'Examify',
            description: 'Aplicación web que mejora la gestión de exámenes en línea, permitiendo a los profesores crear exámenes y a los estudiantes realizar un seguimiento de su progreso. Implementada con Angular y Spring Boot, la aplicación soporta autenticación con JWT y almacenamiento en MySQL.',
            technologies: ['Angular', 'Spring', 'JWT', 'MySQL', 'Tailwind CSS'],
            repositoryLink: 'https://github.com/JosephLlacchua/exam-management-system-backend',
            demoLink: 'https://examifyapp.netlify.app/',
            logros :[]
        },
        {
            imageSrcs: [webMaster1, webMaster2, webMaster3, webMaster4, webMaster5],
            title: 'Web Master',
            description: 'Web Master es una plataforma web intuitiva y fácil de usar que permite a las empresas publicar proyectos de software y a los desarrolladores freelance postularse para trabajar en ellos. Desarrollada con Vue, .NET, MySQL y Bootstrap, esta aplicación busca satisfacer la demanda de soluciones digitales de calidad y la necesidad de los desarrolladores freelance de encontrar proyectos para generar ingresos.',
            technologies: ['Vue', '.NET', 'MySQL', 'Bootstrap', 'JWT'],
            repositoryLink: 'https://github.com/WebMastersUPC/webmaster-app',
            demoLink: 'https://webmasterupcapp.netlify.app/',
            logros :[]

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
                            logros={project.logros}
                            showMore={showMore}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
