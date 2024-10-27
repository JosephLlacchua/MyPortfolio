// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaAngular, FaFire, FaVuejs, FaBootstrap, FaJava, FaDocker, FaKey, FaLeaf, FaCss3Alt, FaCloud } from 'react-icons/fa';
import { SiKubernetes, SiSwagger,SiSpringsecurity } from 'react-icons/si';

const technologyIcons = {
    'React': <FaReact className='text-blue-500 w-6 h-6' />,
    'Node.js': <FaNodeJs className='text-green-500 w-6 h-6' />,
    'MongoDB': <FaDatabase className='text-green-600 w-6 h-6' />,
    'Express': <FaJsSquare className='text-gray-500 w-6 h-6' />,
    'Angular': <FaAngular className='text-red-500 w-6 h-6' />,
    'Firebase': <FaFire className='text-yellow-500 w-6 h-6' />,
    'TypeScript': <FaJsSquare className='text-blue-700 w-6 h-6' />,
    'Vue': <FaVuejs className='text-green-400 w-6 h-6' />,
    'MySQL': <FaDatabase className='text-blue-600 w-6 h-6' />,
    'Bootstrap': <FaBootstrap className='text-purple-600 w-6 h-6' />,
    'JSON Fake API': <FaJsSquare className='text-gray-700 w-6 h-6' />,
    'Spring': <FaLeaf className='text-green-500 w-6 h-6' />,
    'JWT': <FaKey className='text-gray-700 w-6 h-6' />,
    'Tailwind CSS': <FaCss3Alt className='text-blue-500 w-6 h-6' />,
    'Java': <FaJava className='text-red-600 w-6 h-6 ' />,
    'Swagger': <SiSwagger className='text-green-700 w-6 h-6' />,
    'Docker': <FaDocker className='text-blue-500 w-6 h-6' />,
    'Azure': <FaCloud className='text-blue-500 w-6 h-6' />,
    'Spring Boot': <FaLeaf className='text-green-500 w-6 h-6' />,
    'Kubernetes': <SiKubernetes className='text-blue-500 w-6 h-6' />,
    'Render': <FaCloud className='text-blue-500 w-6 h-6' />,
    'Spring Security': <SiSpringsecurity className='text-green-500 w-6 h-6' />,
};

const ProjectCard = ({ imageSrcs, title, description, technologies, repositoryLink, demoLink }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imageSrcs.length]);

    return (
        <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg overflow-hidden">
                <img loading="lazy" src={imageSrcs[currentImageIndex]} alt={title} className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col items-start w-full md:w-1/2 space-y-4 mt-4 md:mt-0 md:ml-6">
                <h3 className='text-secondary text-4xl font-bold'>{title}</h3>
                <p className='text-white'>{description}</p>
                <div className='flex space-x-2'>
                    {technologies.map((tech, index) => (
                        <div key={index} className='flex items-center space-x-1'>
                            {technologyIcons[tech]}
                            <span className='text-white'>{tech}</span>
                        </div>
                    ))}
                </div>
                <div className='flex space-x-2'>
                    <a href={repositoryLink} target="_blank" rel="noopener noreferrer"
                       className='bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2'>
                        <FaGithub className='w-4 h-4'/>
                        <span>Código</span>
                    </a>
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer"
                           className='bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full flex items-center space-x-2'>
                            <FaExternalLinkAlt className='w-4 h-4'/>
                            <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    imageSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    repositoryLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
};

export default ProjectCard;
