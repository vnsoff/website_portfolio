// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from "./components/Contact";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/" element={<Projects />} />
                <Route path="/" element={<Experience />} />
                <Route path="/" element={<Contact />} />
                {/* Add more routes for other components/pages */}
            </Routes>
        </Router>
    );
};

export default App;
