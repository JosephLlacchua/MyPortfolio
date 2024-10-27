import { FaUniversity, FaCertificate } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { TimelineItem } from '../../components/TimelineItem';
import { getText } from '../../i18n.jsx';
import PropTypes from "prop-types";

export const AcademicTraining = ({ lang }) => {
    const timelineItems = getText(lang, 'academicTraining', 'timelineItems');

    return (
        <div id='formation' className="w-screen min-h-fit bg-background2 p-6 md:p-10">
            <div className="max-w-screen-xl mx-auto mt-8 md:mt-12 mb-8 md:mb-12">
                <h3 className="text-secondary text-xl md:text-3xl mt-8 md:mt-8">
                    {getText(lang, 'academicTraining', 'title')}
                </h3>
                <div className="relative mt-8">
                    <div className="absolute w-1 bg-secondary h-full left-6 transform -translate-x-1/2 md:ml-2 md:block"></div>
                    <div className="space-y-8 mb-8 md:-translate-x-16">
                        {timelineItems.map((item, index) => (
                            <TimelineItem
                                key={index}
                                Icon={item.title.includes("Udemy") ? SiUdemy : item.title.includes("Certiprof") ? FaCertificate : FaUniversity}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

AcademicTraining.propTypes = {
    lang: PropTypes.string.isRequired,
};
