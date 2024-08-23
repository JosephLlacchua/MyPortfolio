﻿
const Footer = () => {
    return (
        <div id='footer' className="w-screen md:h-auto bg-background p-0 md:p-8">
            <div className="max-w-screen-xl mx-auto">
                <footer className="w-full bg-background p-6 md:p-3">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center">
                        <div className="text-sm md:text-base text-text flex flex-col md:flex-row justify-center items-center text-center space-y-2 md:space-y-0 md:space-x-8">
                            <p>Ingeniero de  Software</p>
                            <p>&copy; {new Date().getFullYear()} Joseph Llacchua. Sólo unos pocos derechos reservados.</p>
                            <p>Lima, Peru</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;