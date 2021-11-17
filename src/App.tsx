import React, { useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Technologies from './pages/Technologies';
import Welcome from './pages/Welcome';

const App = () => {
    const [openContent, setOpenContent] = useState(false);
    // const [openMenu, setOpenMenu] = useState(false);

    return (
        <BrowserRouter>
            <Home openContent={openContent} setOpenContent={setOpenContent} />

            {/* <div className={`overlay ${openContent ? 'overlay--active' : ''}`}> */}
            <div className={`content ${openContent ? 'content--active' : ''}`}>
                <Routes>
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            {/* </div> */}
        </BrowserRouter>
    );
};

export default App;
