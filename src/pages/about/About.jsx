import { FaChartLine, FaDatabase, FaTrophy } from "react-icons/fa";
import { TimelineItem } from '../../components/TimelineItem';

export const AboutMe = () => {
    return (
        <div id='about' className="w-screen min-h-fit bg-background2 p-6 md:p-10">
            <div className="max-w-screen-xl mx-auto mt-8 md:mt-12 mb-8 md:mb-12">
                <h2 className="text-secondary text-4xl md:text-5xl font-bold mb-4">Sobre Mi</h2>
                <p className="text-white text-base md:text-lg md:leading-8">
                    Soy un Ingeniero de Software Backend con experiencia en Java y Spring Boot, especializado en el diseño y desarrollo de arquitecturas robustas y escalables. Mis conocimientos en frontend, especialmente Angular, me permiten tener una visión integral del desarrollo de aplicaciones web.
                </p>
                <p className="text-white text-base md:text-lg md:leading-8 mt-4">
                    Soy un profesional meticuloso y orientado a resultados, con una gran capacidad para resolver problemas complejos y encontrar soluciones innovadoras. Mi habilidad para trabajar de forma autónoma y en equipo, junto con mi excelente comunicación, me permiten adaptarme a diferentes entornos de trabajo y colaborar de manera efectiva con otros desarrolladores.
                </p>
                <p className="text-white text-base md:text-lg md:leading-8 mt-4">
                    Además de mi pasión por la tecnología, disfruto aprendiendo sobre nuevas tendencias y herramientas, lo que me mantiene actualizado y me permite ofrecer soluciones de vanguardia a nuestros clientes.
                </p>

                <h3 className="text-secondary text-xl md:text-3xl mt-8 md:mt-8">Experiencia Académica</h3>

                <div className="relative mt-8">
                    <div className="absolute w-1 bg-secondary h-full left-6 transform -translate-x-1/2 md:ml-2 md:block"></div>
                    <div className="space-y-8 mb-8 md:-translate-x-16">
                        <TimelineItem
                            Icon={FaTrophy}
                            date="2024"
                            title="Examify: Plataforma de Gestión de Exámenes Escalable"
                            description="Desarrollé una plataforma de gestión de exámenes en línea utilizando Angular para el frontend y Spring Boot para el backend. Esta aplicación se centró en la administración de exámenes y la gestión de roles de usuario, lo que me permitió perfeccionar mis habilidades en el diseño de bases de datos relacionales."
                        />
                        <TimelineItem
                            Icon={FaDatabase}
                            date="2024"
                            title="2squareD: Innovación en Aprendizaje Matemático"
                            description="Lideré el desarrollo del backend de MathPlayOpen, una plataforma educativa centrada en el aprendizaje matemático. Este proyecto, parte del curso de Open Source, me brindó experiencia práctica en Spring Boot, MongoDB, y en la creación de APIs RESTful."
                        />
                        <TimelineItem
                            Icon={FaChartLine}
                            date="2023"
                            title="From Zero: Conectando Empresas y Desarrolladores"
                            description="Creé una aplicación web con Vue.js y .NET que facilita la conexión entre empresas que buscan soluciones tecnológicas y freelancers en busca de oportunidades. El sistema incluye autenticación de usuarios y gestión de contenido, optimizando la colaboración entre ambos sectores."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
