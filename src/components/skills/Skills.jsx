import { FaReact, FaJava, FaVuejs, FaAngular, FaCloud } from "react-icons/fa"; // Use FaCloud as a replacement for SiAzure
import { SiSpringboot, SiMysql } from "react-icons/si";

const skills = [
    { id: 1, Icon: FaCloud, name: "Azure" }, // Replaced SiAzure with FaCloud
    { id: 2, Icon: FaAngular, name: "Angular" },
    { id: 3, Icon: FaJava, name: "Java" },
    { id: 4, Icon: SiMysql, name: "MySQL" },
    { id: 5, Icon: SiSpringboot, name: "Spring Boot" },
    { id: 6, Icon: FaVuejs, name: "Vue.js" },
    { id: 7, Icon: FaReact, name: "React" },
];

export const Skills = () => {
    return (
        <div id='skills'   className="w-full p-2 bg-background">
            <div className="mx-auto w-full px-1 md:px-8">
                <div
                    className="group relative flex gap-6 overflow-hidden p-2"
                    style={{
                        maskImage:
                            'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                    }}
                >
                    {Array(5)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                            >
                                {skills.map(skill => (
                                    <div key={skill.id} className="flex flex-col items-center">
                                        <skill.Icon size={70} className="text-primary" />
                                        <div className="text-white text-lg">{skill.name}</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
