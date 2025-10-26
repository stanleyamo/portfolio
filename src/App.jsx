import React from 'react';
import Navbar from "./component/Navbar/Navbar.jsx";
import Landing from "./component/Landing Page/Landing.jsx";
import About from "./component/About Page/About.jsx";

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
        </>
    );
};

export default App;