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
import { getText } from '../../i18n.jsx';
import PropTypes from "prop-types";

export const Projects = ({ lang }) => {
    const [showMore] = useState(false);

    const projects = [
        {
            imageSrcs: ["https://i.imgur.com/TW5hU7s.png","https://i.imgur.com/81RvK5O.png","https://i.imgur.com/R4uiYm8.png","https://i.imgur.com/7lI7P2Y.png","https://i.imgur.com/in3Q6jT.png"],
            title: 'InnControl',
            description: getText(lang, 'projects', 'innControlDescription'),
            technologies: ['Java', 'Spring Boot', 'Docker', 'Azure', 'Swagger', 'Kubernetes'],
            repositoryLink : 'https://github.com/upc-pre-20242-si657-sw72-grupo5/inncontrol-microservices'
        },
        {
            imageSrcs: ["https://i.imgur.com/1Xfx1fB.png","https://i.imgur.com/c5K68KG.png","https://i.imgur.com/KisQZGm.png","https://i.imgur.com/5bQvI9q.png","https://i.imgur.com/SnAjpBM.png","https://i.imgur.com/dHHfawX.png"],
            title: 'UniRider',
            description: getText(lang, 'projects', 'uniRiderDescription'),
            technologies: ['Java', 'Spring Boot','Spring Security', 'Docker', 'Swagger', 'Azure'],
            demoLink: 'https://wx74-unirider.github.io/LandingPage/',
            repositoryLink : 'https://github.com/WX74-UniRider/UniRider-Backend-UPC'
        },
        {
            imageSrcs: ["https://i.imgur.com/OEu4cMq.png","https://i.imgur.com/3mBuwaP.png" ,"https://i.imgur.com/KLbCCQA.png","https://i.imgur.com/ZklNe6k.png","https://i.imgur.com/BTKEC6e.png","https://i.imgur.com/2OjWOlV.png"],
            title: 'FromZeroApi',
            description: getText(lang, 'projects', 'fromZeroApiDescription'),
            technologies: ['Java', 'Spring Boot','Spring Security', 'MySQL', 'Docker', 'Render', 'Swagger'],
            repositoryLink : 'https://github.com/upc-pre-202402-cc238-wx63-g1/FromZeroAPI'
        },
        {
            imageSrcs: ["https://i.imgur.com/C5oheqm.png","https://i.imgur.com/KVD5MP1.png","https://i.imgur.com/KxcwPVu.png",
                "https://i.imgur.com/TSsNEK1.png","https://i.imgur.com/LXmdTcx.png","https://i.imgur.com/f3YYw5k.png","https://i.imgur.com/TAjh8bv.png",
                "https://i.imgur.com/RGNMY8q.png","https://i.imgur.com/YINXW9X.png","https://i.imgur.com/E58vap4.png"],
            title: 'InkaMarket',
            description: getText(lang, 'projects', 'inkaMarketDescription'),
            technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Azure'],
            repositoryLink : 'https://docs.google.com/document/d/1qC8RiQzh840ELeJ7B_ItYt1WwT-K23x4YbliO2fP2EE/edit?tab=t.0'
        },
        {
            imageSrcs: [examify1, examify2, examify3, examify4, examify5, examify6, examify7, examify8, examify10],
            title: 'Examify',
            description: getText(lang, 'projects', 'examifyDescription'),
            technologies: ['Angular', 'Spring Boot', 'Spring Security', 'MySQL', 'Tailwind CSS'],
            repositoryLink: 'https://github.com/JosephLlacchua/exam-management-system-backend',
            demoLink: 'https://examifyapp.netlify.app/',
        },
        {
            imageSrcs: [webMaster1, webMaster2, webMaster3, webMaster4, webMaster5],
            title: 'Web Master',
            description: getText(lang, 'projects', 'webMasterDescription'),
            technologies: ['Vue', '.NET', 'MySQL', 'Bootstrap', 'Spring Security'],
            repositoryLink: 'https://github.com/WebMastersUPC/webmaster-app',
            demoLink: 'https://webmasterupcapp.netlify.app/',
        },
    ];

    return (
        <div id="projects" className="w-screen h-auto p-6 md:p-14 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                    {getText(lang, 'projects', 'title')}
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

Projects.propTypes = {
    lang: PropTypes.string.isRequired,
};
