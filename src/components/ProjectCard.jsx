// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const technologyIcons = {
    'React': <div className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm'>React</div>,
    'Node.js': <div className='bg-green-500 text-white px-3 py-1 rounded-full text-sm'>Node.js</div>,
    'MongoDB': <div className='bg-green-600 text-white px-3 py-1 rounded-full text-sm'>MongoDB</div>,
    'Express': <div className='bg-gray-500 text-white px-3 py-1 rounded-full text-sm'>Express</div>,
    'Angular': <div className='bg-red-500 text-white px-3 py-1 rounded-full text-sm'>Angular</div>,
    'Firebase': <div className='bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Firebase</div>,
    'TypeScript': <div className='bg-blue-700 text-white px-3 py-1 rounded-full text-sm'>TypeScript</div>,
    'Vue': <div className='bg-green-400 text-white px-3 py-1 rounded-full text-sm'>Vue</div>,
    '.NET': <div className='bg-purple-500 text-white px-3 py-1 rounded-full text-sm'>.NET</div>,
    'MySQL': <div className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm'>MySQL</div>,
    'Bootstrap': <div className='bg-purple-600 text-white px-3 py-1 rounded-full text-sm'>Bootstrap</div>,
    'JSON Fake API': <div className='bg-gray-700 text-white px-3 py-1 rounded-full text-sm'>JSON Fake API</div>,
    'Spring': <div className='bg-green-500 text-white px-3 py-1 rounded-full text-sm'>Spring</div>,
    'JWT': <div className='bg-gray-700 text-white px-3 py-1 rounded-full text-sm'>JWT</div>,
    'Tailwind CSS': <div className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm'>Tailwind CSS</div>,
};

const ProjectCard = ({ imageSrcs, title, description, technologies, repositoryLink, demoLink }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length);
        }, 3000); // Change image every 3 seconds
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
                        <div key={index}>
                            {technologyIcons[tech]}
                        </div>
                    ))}
                </div>
                <div className='flex space-x-2'>
                    <a href={repositoryLink} target="_blank" rel="noopener noreferrer"
                       className='bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2'>
                        <FaGithub className='w-4 h-4'/>
                        <span>Code</span>
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
