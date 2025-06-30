// components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
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

    useEffect(() => {
        controls.set({ opacity: 0, y: -50 });
        controls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 1.9 } });
    }, [controls]);

    /* ---------------- Scroll handler optimizado ---------------- */
    const lastScrollY = useRef(0);
    const ticking = useRef(false);
    const SCROLL_DELTA = 12;

    useEffect(() => {
        const update = () => {
            ticking.current = false;
            const currentY = window.scrollY;

            if (isOpen) {
                controls.start("show");
                lastScrollY.current = currentY;
                return;
            }

            const diff = currentY - lastScrollY.current;
            if (Math.abs(diff) < SCROLL_DELTA) return;

            if (currentY <= 0 || diff < 0) {
                controls.start("show");
            } else {
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

    return (
        <motion.nav
            variants={variants}
            initial="show"
            animate={controls}
            className="fixed top-0 left-0 w-full z-50 bg-stone-900 shadow-lg will-change-transform"
        >
            <div className="container mx-auto relative flex items-center px-6 py-6">
                {/* Botón hamburguesa con 2 líneas finas */}
                <button
                    onClick={toggleMenu}
                    className="z-20 w-6 h-6 flex items-center justify-center"
                >
                    {isOpen ? (
                        <FaTimes className="text-2xl text-white" />
                    ) : (
                        <div className="flex flex-col justify-center items-center w-full h-full space-y-1">
                            <span className="block w-full h-px bg-white" />
                            <span className="block w-full h-px bg-white" />
                        </div>
                    )}
                </button>

                {/* Logo centrado */}
                <NavLink
                    to="/"
                    className="absolute left-1/2 transform -translate-x-1/2 z-10"
                    onClick={closeMenu}
                >
                    <img
                        src={logo}
                        alt="Stellar Progress Logo"
                        className="h-12 w-auto cursor-pointer"
                    />
                </NavLink>
            </div>

            {/* Menú desplegable */}
            {isOpen && (
                <div className="bg-stone-900">
                    <ul className="flex flex-col space-y-4 font-thin p-4 text-white pl-12">
                        {["hero", "services", "about", "contact"].map((id) => {
                            const label =
                                id === "hero"
                                    ? "INICIO"
                                    : id === "services"
                                        ? "SERVICIOS"
                                        : id === "about"
                                            ? "QUIÉNES SOMOS"
                                            : "CONTACTO";

                            const commonClasses =
                                "uppercase cursor-pointer transition-colors px-4 py-2 rounded-full hover:bg-white hover:text-black hover:font-medium";

                            return (
                                <li key={id}>
                                    {isHome ? (
                                        <Link
                                            to={id}
                                            smooth
                                            duration={500}
                                            offset={-80}
                                            onClick={closeMenu}
                                            className={commonClasses}
                                        >
                                            {label}
                                        </Link>
                                    ) : (
                                        <NavLink
                                            to="/"
                                            onClick={closeMenu}
                                            className={commonClasses}
                                        >
                                            {label}
                                        </NavLink>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </motion.nav>
    );
}

export default Navbar;
