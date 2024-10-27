import CountUp from 'react-countup';
import { getText } from '../i18n.jsx';
import PropTypes from "prop-types";

export const AnimatedStats = ({ lang }) => {
    const stats = [
        { id: 1, title: getText(lang, 'stats', 'average'), value: 18 },
        { id: 2, title: getText(lang, 'stats', 'projects'), value: 10 },
        { id: 3, title: getText(lang, 'stats', 'cycle'), value: 6 },
    ];

    return (
        <div className="bg-secondary p-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center">
                            <div className="text-background2 text-5xl font-bold mb-2">
                                <CountUp end={stat.value} duration={2} />+
                            </div>
                            <div className="text-background2 text-lg">{stat.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

AnimatedStats.propTypes = {
    lang: PropTypes.string.isRequired,
};


