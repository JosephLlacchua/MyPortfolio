import {useState} from 'react';
import emailjs from 'emailjs-com';
import {FaCopy} from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const copyEmail = () => {
        const email = 'llacchuajoseph@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied!: " + email);
        });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_xlx71oi', 'template_h2iqaeo', {
            ...formData,
            to_email: 'llacchuajoseph@gmail.com'
        }, 'R5qiWTO9P9VGIdpeh')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send message, please try again later.');
            });

        setFormData({name: '', email: '', message: ''});
    };

    return (
        <div id='contact' className="w-screen min-h-fit bg-background p-6 md:p-16">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-secondary text-4xl md:text-5xl font-bold mb-6 md:mb-14">¿Tienes un Proyecto en
                    Mente? Hablemos.</h1>
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='flex flex-col w-full md:w-1/2'>

                        <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
                            <div className="flex items-center justify-center md:justify-start mt-2">
                                <div id="emailCopy"
                                     className="bg-background border-none md:text-lg text-text text-center md:text-left">llacchuajoseph@gmail.com
                                </div>
                                <button type="button" onClick={copyEmail} className="ml-4 text-white"><FaCopy/></button>
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-4">x|
                                <div className="w-full">
                                    <label htmlFor="name"
                                           className="block text-sm font-medium text-primary">Name</label>
                                    <input placeholder="Your Name" type="text" id="name" name="name"
                                           value={formData.name} onChange={handleChange}
                                           className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary bg-background2 text-text"
                                           required/>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-primary">Email</label>
                                    <input placeholder="Your Email" type="email" id="email" name="email"
                                           value={formData.email} onChange={handleChange}
                                           className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary bg-background2 text-text"
                                           required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message"
                                       className="block text-sm font-medium text-primary">Message</label>
                                <textarea placeholder="Your Message" id="message" name="message" rows="4"
                                          value={formData.message} onChange={handleChange}
                                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary bg-background2 text-text"
                                          required></textarea>
                            </div>
                            <div className="flex justify-start">
                                <button type="submit"
                                        className="w-full bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark focus:outline-none md:hover:bg-green-600 transition-all">Send
                                </button>
                            </div>
                        </form>

                    </div>
                    <div
                        className='flex flex-col w-full md:w-1/2 justify-center items-center p-5 ml-0 md:ml-12 text-center cursor-default'>
                        <h3 className='hidden md:block text-base md:text-2xl text-white text-opacity-50'>
                            No dude en ponerse en contacto conmigo para cualquier consulta o colaboración.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
