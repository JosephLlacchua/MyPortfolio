import { getText } from '../../i18n.jsx';
import PropTypes from "prop-types";

const Footer = ({ lang }) => {
    return (
        <div id='footer' className="w-screen md:h-auto bg-background p-0 md:p-8">
            <div className="max-w-screen-xl mx-auto">
                <footer className="w-full bg-background p-6 md:p-3">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center">
                        <div className="text-sm md:text-base text-text flex flex-col md:flex-row justify-center items-center text-center space-y-2 md:space-y-0 md:space-x-8">
                            <p>{getText(lang, 'footer', 'role')}</p>
                            <p>&copy; {new Date().getFullYear()} Joseph Llacchua. {getText(lang, 'footer', 'rightsReserved')}</p>
                            <p>{getText(lang, 'footer', 'location')}</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

Footer.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default Footer;
