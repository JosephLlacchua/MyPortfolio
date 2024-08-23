import { FaUniversity, FaCertificate } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { TimelineItem } from '../../components/TimelineItem';

export const AcademicTraining = () => {
    return (
        <div id='formation' className="w-screen min-h-fit bg-background2 p-6 md:p-10">
            <div className="max-w-screen-xl mx-auto mt-8 md:mt-12 mb-8 md:mb-12">
                <h3 className="text-secondary text-xl md:text-3xl mt-8 md:mt-8">Formación</h3>
                <div className="relative mt-8">
                    <div className="absolute w-1 bg-secondary h-full left-6 transform -translate-x-1/2 md:ml-2 md:block"></div>
                    <div className="space-y-8 mb-8 md:-translate-x-16">
                        <TimelineItem
                            Icon={FaUniversity}
                            date="2022 - Actualidad"
                            title="Universidad Peruana de Ciencias Aplicadas (UPC)"
                            description="Ingeniería de Software - 6timo ciclo."
                        />
                        <TimelineItem
                            Icon={SiUdemy}
                            date="2024 - Actualidad"
                            title="Udemy"
                            description="Spring Framework 6 & Spring Boot 3."
                        />
                        <TimelineItem
                            Icon={FaCertificate}
                            date="2023"
                            title="Certiprof"
                            description="Scrum Master: Metodologías Scrum"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
