import React from 'react';
import Navbar from "./component/Navbar/Navbar.jsx";
import Hero from "./component/Hero/Hero.jsx";
import About from "./component/About/About.jsx";

const App = () => {
    return (
        <div>
           <Navbar />
            <Hero />
            <About />
        </div>
    );
};

export default App;