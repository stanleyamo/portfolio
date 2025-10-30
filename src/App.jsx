import React from 'react';
import Navbar from "./component/Navbar/Navbar.jsx";
import Landing from "./component/Landing Page/Landing.jsx";
import About from "./component/About Page/About.jsx";
import Services from "./component/Services/Services.jsx";
import ProjectPreview from "./component/Portfolio Page/ProjectPreview.jsx";
import Contact from "./component/Contact/Contact.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <section id="home">
                <Landing/>
            </section>
            <section id="about">
                <About/>
            </section>
            <section id="services">
                <Services/>
            </section>
            <section id="portfolio">
                <ProjectPreview/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </>
    );
};

export default App;