import React, { useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import Content from './components/Content';
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

    //* type array Card.tsx
    //* animation navbar link brutal
    //* Go yo welcome si on est sur mobile

    return (
        <BrowserRouter>
            <Home
                setOpenMenu={setOpenMenu}
                openMenu={openMenu}
                openContent={openContent}
                setOpenContent={setOpenContent}
            />

            <Fade visible={openMenu} duration="800" className="fade__navbar">
                <Navbar
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    openContent={openContent}
                    setOpenContent={setOpenContent}
                />
            </Fade>

            <Fade visible={openContent} className="fade__content" duration="800">
                <div className="content">
                    <Routes>
                        <Route path="/welcome" element={<Welcome />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/technologies" element={<Technologies />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Fade>
        </BrowserRouter>
    );
};

export default App;
