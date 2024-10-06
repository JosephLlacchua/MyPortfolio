import { FaChartLine, FaDatabase, FaTrophy } from "react-icons/fa";
import { TimelineItem } from '../../components/TimelineItem';

export const AboutMe = () => {
    return (
        <div id='about' className="w-screen min-h-fit bg-background2 p-6 md:p-10">
            <div className="max-w-screen-xl mx-auto mt-8 md:mt-12 mb-8 md:mb-12">
                <h2 className="text-secondary text-4xl md:text-5xl font-bold mb-4">Sobre Mí</h2>
                <p className="text-white text-base md:text-lg md:leading-8">
                    Soy un <strong>Ingeniero de Software Backend</strong> con experiencia en la creación de <strong>soluciones escalables y eficientes</strong> para resolver problemas complejos en el ámbito tecnológico. Mi stack principal incluye <strong>Java, Spring Boot, MySQL, Docker, JWT</strong> y <strong>Angular</strong> en el frontend, lo que me permite tener una visión completa del desarrollo de aplicaciones web modernas.
                </p>
                <p className="text-white text-base md:text-lg md:leading-8 mt-4">
                    A lo largo de mi trayectoria, he trabajado tanto en <strong>proyectos personales</strong> como en <strong>colaboraciones en equipo</strong>, aplicando metodologías ágiles como <strong>Scrum</strong> y asegurando la calidad de mi código mediante <strong>pruebas unitarias con JUnit</strong>. Mi enfoque está en la <strong>eficiencia y la escalabilidad</strong>, y me apasiona crear <strong>arquitecturas robustas</strong> que se adapten a las necesidades de los usuarios.
                </p>
                <p className="text-white text-base md:text-lg md:leading-8 mt-4">
                    Además, siempre busco <strong>mantenerme actualizado</strong> en las últimas tendencias tecnológicas y <strong>explorar nuevas herramientas</strong> que me permitan mejorar la experiencia de desarrollo y ofrecer <strong>soluciones de vanguardia</strong> a las empresas con las que colaboro.
                </p>

                <h3 className="text-secondary text-xl md:text-3xl mt-8 md:mt-8">Experiencia Académica y Profesional</h3>

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
