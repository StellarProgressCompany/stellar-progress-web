import React, { useEffect, useState } from "react";
import logo from "../assets/LOGO/LOGO-STELLAR-LLETRES-PNG-BLANC.png";

export default function Animation() {
    // Progreso de la barra (0 a 100)
    const [progress, setProgress] = useState(0);
    // Estado para el fade out del overlay
    const [fadeOut, setFadeOut] = useState(false);
    // Controla si se muestra o no la pantalla de carga
    const [showAnimation, setShowAnimation] = useState(true);
    // Escala del logo para efectos de zoom
    const [logoScale, setLogoScale] = useState(0.95);
    // Opacidad del logo para efecto fade in
    const [logoOpacity, setLogoOpacity] = useState(0);

    // Efecto para iniciar el fade in y zoom del logo
    useEffect(() => {
        const timer = setTimeout(() => {
            setLogoOpacity(1); // Inicia el fade in
            setLogoScale(1);   // Realiza un zoom de 0.95 a 1
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Incrementa el progreso de la barra de carga
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 15); // Aproximadamente 1.5 seg para llegar a 100
        return () => clearInterval(interval);
    }, []);

    // Cuando la barra llega al 100%, iniciamos el fade out y un pequeño efecto en el logo
    useEffect(() => {
        if (progress === 100) {
            setFadeOut(true);
            setLogoScale(1.1);
            const timer = setTimeout(() => {
                setShowAnimation(false);
            }, 400); // 400ms para el fade out final
            return () => clearTimeout(timer);
        }
    }, [progress]);

    // Si showAnimation es false, el componente no se renderiza
    if (!showAnimation) {
        return null;
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center
                bg-black/90 z-50 transition-opacity duration-500
                ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
            {/* Logo con efecto fade in y zoom; usa w-48 en móviles y w-72 en pantallas mayores */}
            <img
                src={logo}
                alt="LOGO"
                className="w-48 sm:w-72 h-auto mb-4 transform transition-all duration-500 ease-out"
                style={{ transform: `scale(${logoScale})`, opacity: logoOpacity }}
            />

            {/* Barra de carga */}
            <div className="w-full h-0.5 bg-gray-700 overflow-hidden">
                <div
                    className="h-full bg-gray-100"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
