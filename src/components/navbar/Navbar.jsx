// src/components/navbar/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import { MdOutlineTranslate } from "react-icons/md";
import { getText } from '../../i18n.jsx';

export const Navbar = ({ lang, setLang }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setLang(newLang);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-background z-10 fixed top-0 left-0 right-0 shadow-md">
            <div className="text-secondary text-2xl font-bold cursor-pointer">JLLP</div>
            <div className={`space-x-8 text-text hidden md:flex`}>
                <a href="#home"
                   className="hover:text-primary hover:transition-all">{getText(lang, 'navbar', 'home')}</a>
                <a href="#about"
                   className="hover:text-primary hover:transition-all">{getText(lang, 'navbar', 'about')}</a>
                <a href="#projects"
                   className="hover:text-primary hover:transition-all">{getText(lang, 'navbar', 'projects')}</a>
                <a href="#formation"
                   className="hover:text-primary hover:transition-all">{getText(lang, 'navbar', 'formation')}</a>
                <a href="#contact"
                   className="hover:text-primary hover:transition-all">{getText(lang, 'navbar', 'contact')}</a>
            </div>
            <div className="space-x-4 text-text flex items-center">
                <a href="https://www.linkedin.com/in/joseph-llacchua" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <FaLinkedin size={24}/>
                </a>
                <a href="https://github.com/JosephLlacchua" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <FaGithub size={24}/>
                </a>
                <a href="mailto:josephllacchua123@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <FaEnvelope size={24}/>
                </a>
                <div className="relative flex items-center bg-background text-text border border-gray-700 rounded-md">
                    <MdOutlineTranslate size={16} className="text-text ml-2"/>
                    <select
                        value={lang}
                        onChange={handleLanguageChange}
                        className="bg-background text-text border-none rounded-md px-2 py-1 focus:outline-none"
                    >
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                    </select>
                </div>
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                </button>
            </div>
            {isOpen && (
                <div ref={menuRef}
                     className="absolute top-11 left-0 right-0 bg-background2 text-white z-20 flex flex-col items-center md:hidden space-y-5 py-4 shadow-md">
                    <a href="#home" className="hover:text-primary hover:transition-all"
                       onClick={() => setIsOpen(false)}>{getText(lang, 'navbar', 'home')}</a>
                    <a href="#about" className="hover:text-primary hover:transition-all"
                       onClick={() => setIsOpen(false)}>{getText(lang, 'navbar', 'about')}</a>
                    <a href="#projects" className="hover:text-primary hover:transition-all"
                       onClick={() => setIsOpen(false)}>{getText(lang, 'navbar', 'projects')}</a>
                    <a href="#formation" className="hover:text-primary hover:transition-all"
                       onClick={() => setIsOpen(false)}>{getText(lang, 'navbar', 'formation')}</a>
                    <a href="#contact" className="hover:text-primary hover:transition-all"
                       onClick={() => setIsOpen(false)}>{getText(lang, 'navbar', 'contact')}</a>
                </div>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    lang: PropTypes.string.isRequired,
    setLang: PropTypes.func.isRequired,
};
