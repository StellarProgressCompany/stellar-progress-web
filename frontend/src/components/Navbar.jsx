// components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/LOGO/LOGO-STELLAR-PNG-BLANC.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    /* ---------------- Animaciones ---------------- */
    const controls = useAnimation();
    const variants = {
        show: { y: 0, transition: { duration: 0.3, ease: "easeOut" } },
        hide: { y: "-100%", transition: { duration: 0.3, ease: "easeIn" } },
    };

    /* ---------------- Scroll handler optimizado ---------------- */
    const lastScrollY = useRef(0);
    const ticking = useRef(false);
    const SCROLL_DELTA = 12; // px mínimos antes de decidir

    useEffect(() => {
        // animación inicial tras hero (delay 1.9 s)
        controls.set({ opacity: 0, y: -50 });
        controls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 1.9 } });
    }, [controls]);

    useEffect(() => {
        const update = () => {
            ticking.current = false;
            const currentY = window.scrollY;

            /* Mantener visible si menú móvil está abierto */
            if (isOpen) {
                controls.start("show");
                lastScrollY.current = currentY;
                return;
            }

            /* Determinar si cambiamos de estado */
            const diff = currentY - lastScrollY.current;
            if (Math.abs(diff) < SCROLL_DELTA) return; // movimiento muy pequeño

            if (currentY <= 0 || diff < 0) {
                // Arriba del todo o desplazándose hacia arriba
                controls.start("show");
            } else {
                // Scroll hacia abajo
                controls.start("hide");
            }
            lastScrollY.current = currentY;
        };

        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(update);
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls, isOpen]);

    /* ---------------- Menú móvil ---------------- */
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    /* ---------------- Render ---------------- */
    return (
        <motion.nav
            variants={variants}
            initial="show"
            animate={controls}
            className="fixed top-0 left-0 w-full z-50 bg-gray-800 bg-opacity-95 shadow-lg will-change-transform"
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <NavLink to="/">
                    <img src={logo} alt="Stellar Progress Logo" className="h-12 w-auto cursor-pointer" />
                </NavLink>

                {/* Enlaces desktop */}
                <div className="hidden md:flex">
                    <ul className="flex space-x-6 font-thin text-white">
                        {[
                            { id: "hero", label: "Inicio" },
                            { id: "services", label: "Servicios" },
                            { id: "about", label: "Quiénes somos" },
                            { id: "contact", label: "Contacto" },
                        ].map((item) => (
                            <li key={item.id}>
                                {isHome ? (
                                    <Link
                                        to={item.id}
                                        smooth
                                        duration={500}
                                        offset={-80}
                                        onClick={closeMenu}
                                        className="cursor-pointer hover:text-yellow-500 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <NavLink
                                        to="/"
                                        onClick={closeMenu}
                                        className="cursor-pointer hover:text-yellow-500 transition-colors"
                                    >
                                        {item.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Botón hamburguesa */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Menú móvil desplegable */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-90">
                    <ul className="flex flex-col space-y-4 font-thin p-4 text-white">
                        {["hero", "services", "about", "contact"].map((id) => (
                            <li key={id}>
                                {isHome ? (
                                    <Link
                                        to={id}
                                        smooth
                                        duration={500}
                                        offset={-80}
                                        onClick={closeMenu}
                                        className="cursor-pointer hover:text-yellow-500 transition-colors"
                                    >
                                        {id === "hero"
                                            ? "Inicio"
                                            : id === "services"
                                                ? "Servicios"
                                                : id === "about"
                                                    ? "Quiénes somos"
                                                    : "Contacto"}
                                    </Link>
                                ) : (
                                    <NavLink
                                        to="/"
                                        onClick={closeMenu}
                                        className="cursor-pointer hover:text-yellow-500 transition-colors"
                                    >
                                        {id === "hero"
                                            ? "Inicio"
                                            : id === "services"
                                                ? "Servicios"
                                                : id === "about"
                                                    ? "Quiénes somos"
                                                    : "Contacto"}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.nav>
    );
}

export default Navbar;
