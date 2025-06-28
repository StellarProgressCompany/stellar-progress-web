import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AvisoLegal from './pages/AvisoLegal';
import Privacidad from './pages/Privacidad';
import CookiePopup from './pages/CookiePopup'; // ✅ Importación corregida
import Cookies from './pages/Cookies';
import Animation from "./components/Animation";

function App() {
    return (
        <>
            {/* Pantalla de carga */}
            <Animation />

            <Router>
                <CookiePopup /> {/* ✅ Se muestra el popup en todas las páginas */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aviso-legal" element={<AvisoLegal />} />
                    <Route path="/politica-de-privacidad" element={<Privacidad />} />
                    <Route path="/politica-de-cookies" element={<Cookies />} /> {/* ✅ Nueva ruta */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
