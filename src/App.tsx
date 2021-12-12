import React, { useEffect, useRef, useState } from 'react';
import { Route, useLocation } from 'react-router';
import { Routes } from 'react-router-dom';
import Fade from './components/Fade';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Technologies from './pages/Technologies';
import Welcome from './pages/Welcome';

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openContent, setOpenContent] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (!contentRef.current) return;
        contentRef.current.scrollTop = 0;
    }, [location]);

    return (
        <>
            <Home setOpenMenu={setOpenMenu} openMenu={openMenu} setOpenContent={setOpenContent} />
            <Fade visible={openMenu} duration={800} className="fade__navbar">
                <Navbar
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    openContent={openContent}
                    setOpenContent={setOpenContent}
                />
            </Fade>
            <Fade visible={openContent} className="fade__content" duration={800}>
                <div ref={contentRef} className="content">
                    <Routes>
                        <Route path="/welcome" element={<Welcome />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/technologies" element={<Technologies />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Fade>
        </>
    );
};

export default App;
