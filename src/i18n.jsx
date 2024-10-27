import en from './assets/languages/en.json';
import es from './assets/languages/es.json';

const languages = {
    en: en,
    es: es
};

export const getText = (lang, section, key) => {
    if (languages[lang] && languages[lang][section]) {
        return languages[lang][section][key] || `Missing key: ${key}`;
    }
    return `Missing section: ${section}`;
};
