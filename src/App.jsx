
import './App.css'
import {Home} from "./pages/home/home.jsx";
import {Navbar} from "./components/navbar/Navbar.jsx";
import {AboutMe} from "./pages/about/About.jsx";
import {AnimatedStats} from "./components/AnimatedStats.jsx";
import Footer from "./pages/footer/Footer.jsx";
import {Projects} from "./pages/projects/Projects.jsx";
import Contact from "./pages/contact/Contact.jsx";
import {Skills} from "./components/skills/Skills.jsx";
import {AcademicTraining} from "./pages/academic/AcademicTraining.jsx";
import {useState} from "react";

function App() {
    const [lang, setLang] = useState('en'); // Set default language to English

    return (
        <div >
            <Navbar lang={lang} setLang={setLang} />
            <Home />
            <AboutMe />
            <AnimatedStats />
            <Projects />
            <AcademicTraining />
            <Contact />
            <Skills/>
            <Footer/>

        </div>
    );
}

export default App;
