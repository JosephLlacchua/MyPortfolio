import { FaChartLine, FaDatabase, FaTrophy } from "react-icons/fa";
import { TimelineItem } from '../../components/TimelineItem';
import PropTypes from "prop-types";
import { getText } from '../../i18n.jsx';

export const AboutMe = ({ lang }) => {
    return (
        <div id='about' className="w-screen min-h-fit bg-background2 p-6 md:p-10">
            <div className="max-w-screen-xl mx-auto mt-8 md:mt-12 mb-8 md:mb-12">
                <h2 className="text-secondary text-4xl md:text-5xl font-bold mb-4">{getText(lang, 'about', 'title')}</h2>
                <p className="text-white text-base md:text-lg md:leading-8" dangerouslySetInnerHTML={{ __html: getText(lang, 'about', 'description1') }}></p>
                <p className="text-white text-base md:text-lg md:leading-8 mt-4" dangerouslySetInnerHTML={{ __html: getText(lang, 'about', 'description2') }}></p>
                <p className="text-white text-base md:text-lg md:leading-8 mt-4" dangerouslySetInnerHTML={{ __html: getText(lang, 'about', 'description3') }}></p>

                <h3 className="text-secondary text-xl md:text-3xl mt-8 md:mt-8">{getText(lang, 'about', 'experienceTitle')}</h3>

                <div className="relative mt-8">
                    <div className="absolute w-1 bg-secondary h-full left-6 transform -translate-x-1/2 md:ml-2 md:block"></div>
                    <div className="space-y-8 mb-8 md:-translate-x-16">
                        <TimelineItem
                            Icon={FaTrophy}
                            date="2024"
                            title="Examify: Plataforma de Gestión de Exámenes Escalable"
                            description="Desarrollé una plataforma de gestión de exámenes en línea utilizando Angular para el frontend y Spring Boot para el backend. Esta aplicación se centró en la administración de exámenes y la gestión de roles de usuario, mejorando mis habilidades en la creación de arquitecturas escalables y en el diseño de bases de datos relacionales."
                        />
                        <TimelineItem
                            Icon={FaDatabase}
                            date="2024"
                            title="2squareD: Innovación en Aprendizaje Matemático"
                            description="Lideré el desarrollo del backend de MathPlayOpen, una plataforma educativa que fomenta el aprendizaje matemático. Durante este proyecto, parte del curso de Open Source, adquirí experiencia práctica en Spring Boot, MongoDB, y en la creación de APIs RESTful eficientes."
                        />
                        <TimelineItem
                            Icon={FaChartLine}
                            date="2023"
                            title="From Zero: Conectando Empresas y Desarrolladores"
                            description="Diseñé y desarrollé una aplicación web utilizando Vue.js y .NET que conecta empresas con freelancers en busca de oportunidades tecnológicas. El sistema cuenta con autenticación de usuarios y gestión de contenido, facilitando la colaboración eficiente entre ambas partes."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

AboutMe.propTypes = {
    lang: PropTypes.string.isRequired,
};
