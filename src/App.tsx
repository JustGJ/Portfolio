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
    //* Optimiser technos.map technologies.tsx
    //* Transform title toright content.tsx

    return (
        <BrowserRouter>
            <Home setOpenMenu={setOpenMenu} openMenu={openMenu} />
            {/* <Fade visible={openMenu} duration="800" className="fade__navbar"> */}
            {openMenu && <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />}
            {/* </Fade> */}

            {/* <Fade visible={openMenu} className="fade__content" duration="800">
                <Content openMenu={openMenu} />
            </Fade> */}
            {/* <Fade visible={openMenu} className="fade__content" duration="800"> */}
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
