import React, { useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);

    //* type array Card.tsx
    //* animation navbar link brutal
    //* Optimiser technos.map technologies.tsx
    //* Transform title toright content.tsx

    return (
        <BrowserRouter>
            <Home setOpenMenu={setOpenMenu} openMenu={openMenu} />
            {openMenu && <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />}
            <Routes>
                <Route
                    path="/welcome"
                    element={<Content openMenu={openMenu} setOpenMenu={setOpenMenu} />}
                />
                <Route
                    path="/about"
                    element={
                        <Content openMenu={openMenu} setOpenMenu={setOpenMenu} title="À propos" />
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <Content openMenu={openMenu} setOpenMenu={setOpenMenu} title="Portfolio" />
                    }
                />
                <Route
                    path="/technologies"
                    element={
                        <Content
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                            title="Technologies"
                        />
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Content openMenu={openMenu} setOpenMenu={setOpenMenu} title="Contact" />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
