import React from 'react';
import Navbar from "./component/Navbar/Navbar.jsx";
import Landing from "./component/Landing Page/Landing.jsx";
import About from "./component/About Page/About.jsx";

const App = () => {
    return (
        <div>
           <Navbar />
            <Landing />
            <About />
        </div>
    );
};

export default App;