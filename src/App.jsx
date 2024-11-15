
import './App.css'
import Home from './pages/home/home.jsx';
import {Navbar} from "./components/navbar/Navbar.jsx";
import {AboutMe} from "./pages/about/About.jsx";
import {AnimatedStats} from "./components/AnimatedStats.jsx";
import Footer from "./pages/footer/Footer.jsx";
import {Projects} from "./pages/projects/Projects.jsx";
import Contact from "./pages/contact/Contact.jsx";
import {Skills} from "./components/skills/Skills.jsx";
import {AcademicTraining} from "./pages/academic/AcademicTraining.jsx";
import {useState} from "react";
import { getText } from './i18n.jsx';
import pfp from './assets/Gatico.jpeg';
import CV from './assets/CV_Joseph_Llacchua.pdf';

function App() {
    const [lang, setLang] = useState('en'); // Set default language to English

    return (
        <div >
            <Navbar lang={lang} setLang={setLang} />
            <Home lang={lang} getText={getText} pfp={pfp} CV={CV} />
            <AboutMe lang={lang} />
            <AnimatedStats lang={lang} />
            <Projects lang={lang} />
            <AcademicTraining lang={lang}/>
            <Contact lang={lang} />
            <Skills/>
            <Footer lang={lang} />

        </div>
    );
}

export default App;
