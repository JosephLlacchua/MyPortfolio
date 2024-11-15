﻿import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaCopy } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getText } from '../../i18n.jsx';
import PropTypes from "prop-types";

const Contact = ({ lang }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const copyEmail = () => {
        const email = getText(lang, 'contact', 'email');
        navigator.clipboard.writeText(email).then(() => {
            toast.success(getText(lang, 'contact', 'copySuccess') + email);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_lmnbg4s', 'template_nrnllxz', {
            from_name: formData.name,
            to_name: 'Joseph Llacchua',
            message: formData.message
        }, 'R5qiWTO9P9VGIdpeh')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success(getText(lang, 'contact', 'successMessage'));
            })
            .catch((error) => {
                console.error('FAILED...', error);
                toast.error(getText(lang, 'contact', 'errorMessage'));
            });

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id='contact' className="w-screen min-h-fit bg-background p-6 md:p-16">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-secondary text-4xl md:text-5xl font-bold mb-6 md:mb-14">
                    {getText(lang, 'contact', 'title')}
                </h1>
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
                            <div className="flex items-center justify-center md:justify-start mt-2">
                                <div id="emailCopy" className="bg-background border-none md:text-lg text-text text-center md:text-left">
                                    {getText(lang, 'contact', 'email')}
                                </div>
                                <button type="button" onClick={copyEmail} className="ml-4 text-white"><FaCopy /></button>
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <div className="w-full">
                                    <label htmlFor="name" className="block text-sm font-medium text-primary">
                                        {getText(lang, 'contact', 'nameLabel')}
                                    </label>
                                    <input placeholder={getText(lang, 'contact', 'namePlaceholder')} type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary bg-background2 text-text" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="block text-sm font-medium text-primary">
                                        {getText(lang, 'contact', 'emailLabel')}
                                    </label>
                                    <input placeholder={getText(lang, 'contact', 'emailPlaceholder')} type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary bg-background2 text-text" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-primary">
                                    {getText(lang, 'contact', 'messageLabel')}
                                </label>
                                <textarea placeholder={getText(lang, 'contact', 'messagePlaceholder')} id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary bg-background2 text-text" required></textarea>
                            </div>
                            <div className="flex justify-start">
                                <button type="submit" className="w-full bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark focus:outline-none md:hover:bg-green-600 transition-all">
                                    {getText(lang, 'contact', 'sendButton')}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col w-full md:w-1/2 justify-center items-center p-5 ml-0 md:ml-12 text-center cursor-default'>
                        <h3 className='hidden md:block text-base md:text-2xl text-white text-opacity-50'>
                            {getText(lang, 'contact', 'motivate')}
                        </h3>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Contact.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default Contact;
