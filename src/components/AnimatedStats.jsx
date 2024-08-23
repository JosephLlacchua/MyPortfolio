﻿import CountUp from 'react-countup';

export const AnimatedStats = () => {
    const stats = [
        { id: 1, title: 'Promedio', value: 18 },
        { id: 2, title: 'Proyectos', value: 10 },
        { id: 3, title: 'Ciclo', value: 6 },
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

