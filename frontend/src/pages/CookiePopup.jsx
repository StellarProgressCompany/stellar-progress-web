import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CookiePopup() {
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");

        // Si ya se aceptaron las cookies o si estamos en la página de Política de Cookies, no mostramos el popup.
        if (cookiesAccepted || location.pathname === "/politica-de-cookies") {
            setShowPopup(false);
            return;
        }

        // Esperamos 3 segundos después de la animación inicial para mostrar el popup.
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    const handleAcceptCookies = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-700 bg-opacity-90 text-gray-200 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-xl font-bold text-yellow-500 mb-4">
                    🍪 Uso de Cookies
                </h2>
                <p className="text-sm mb-4">
                    Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al aceptar,
                    nos ayudas a ofrecerte un servicio mejor. Puedes leer más en nuestra{" "}
                    <a
                        href="/politica-de-cookies"
                        onClick={() => setShowPopup(false)}
                        className="text-yellow-400 hover:underline"
                    >
                        Política de Cookies
                    </a>.
                </p>
                <button
                    onClick={handleAcceptCookies}
                    className="bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
                >
                    Aceptar Cookies
                </button>
            </div>
        </div>
    );
}
