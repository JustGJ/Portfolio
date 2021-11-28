import React, { useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import Content from './components/Content';
import Fade from './components/Fade';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);
    // const [visible, setVisible] = useState(false);

    //* type array Card.tsx
    //* animation navbar link brutal
    //* animation title toright
    //* Transform title toright content.tsx
    //* Go yo welcome si on est sur mobile

    // document.addEventListener('DOMContentLoaded', function () {
    //     // eslint-disable-next-line no-restricted-globals
    //     screen.width <= 1325 && navigate('/welcome');
    // });

    return (
        <BrowserRouter>
            <Home setOpenMenu={setOpenMenu} openMenu={openMenu} />
            <Fade visible={openMenu} duration="800" className="fade__navbar">
                <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </Fade>

            {/* <Fade visible={openMenu} className="fade__content" duration="2000"> */}
            <Routes>
                <Route path="/welcome" element={<Content openMenu={openMenu} />} />
                <Route path="/about" element={<Content openMenu={openMenu} title="À propos" />} />
                <Route
                    path="/projects"
                    element={<Content openMenu={openMenu} title="Portfolio" />}
                />
                <Route
                    path="/technologies"
                    element={<Content openMenu={openMenu} title="Technologies" />}
                />
                <Route path="/contact" element={<Content openMenu={openMenu} title="Contact" />} />
            </Routes>
            {/* </Fade> */}
        </BrowserRouter>
    );
};

export default App;
