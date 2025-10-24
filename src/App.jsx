import React from 'react';
import Navbar from "./component/Navbar/Navbar.jsx";
import Landing from "./component/Landing Page/Landing.jsx";
import About from "./component/About Page/About.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/About' element={<About/>}/>
            </Routes>
        </Router>
    );
};

export default App;