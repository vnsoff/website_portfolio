// src/components/Logo.js

import React from 'react';
import logo from '../src/logo.png'; // Update the path

const Logo = () => {
    return (
        <div className="App-logo">
            <img src={logo} alt="Your Logo" />
        </div>
    );
};

export default Logo;
