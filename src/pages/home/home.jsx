﻿import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

const Home = ({ lang, getText, pfp, CV }) => {
    const [, setIsScrolled] = useState(false);
    const typedElement = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [getText(lang, 'home', 'typed1'), getText(lang, 'home', 'typed2')],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });

        return () => typed.destroy();
    }, [lang, getText]);

    return (
        <div id="home" className='w-screen h-screen bg-background overflow-hidden relative scroll-smooth'>
            <div className='flex flex-col md:flex-row justify-between items-center h-full mt-16'>
                <div className='ml-6 text-left w-11/12 md:w-1/2 p-8 space-y-4'>
                    <div className='text-secondary text-xl mb-2 '>
                        {getText(lang, 'home', 'welcome')}
                    </div>

                    <div className='text-primary text-5xl md:text-8xl font-bold mb-4 leading-tight'>
                        Joseph Llacchua
                    </div>

                    <div className='text-primary text-2xl md:text-5xl mb-4'>
                        {getText(lang, 'home', 'iam')} <span ref={typedElement} className="typed-text"></span>
                    </div>

                    <a href="#contact">
                        <button className='buttong mt-5'>
                            {getText(lang, 'home', 'contactMe')}
                        </button>
                    </a>
                    <a href={CV} target="_blank" rel="noopener noreferrer">
                        <button className='buttong mt-5 ml-4'>
                            {getText(lang, 'home', 'downloadCV')}
                        </button>
                    </a>

                </div>

                <div
                    className='relative md:w-1/2 w-full h-1/2 md:h-full flex justify-center md:justify-end items-center'>
                    <div className='relative w-full h-full'>
                        <img loading="lazy" src={pfp} alt="Profile" className='w-full h-full object-cover md:object-cover z-0 -mt-16' />
                        <div className='absolute bottom-15 md:bottom-20 right-1/2 md:right-4 transform translate-x-1/2 md:translate-x-0 w-full flex justify-center'>
                            <div className="available-indicator border border-text">
                                <span className="light"></span>
                                {getText(lang, 'home', 'available')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


Home.propTypes = {
    lang: PropTypes.string.isRequired,
    getText: PropTypes.func.isRequired,
    pfp: PropTypes.string.isRequired,
    CV: PropTypes.string.isRequired,
};

export default Home;
