// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative"
            role="banner"
            aria-label="Hero: Su Éxito Es Nuestro Compromiso | Stellar Progress"
        >
            <header className="text-center">
                <motion.h1
                    className="text-5xl md:text-7xl font-mont font-thin uppercase"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.9 }} // Espera 1.9 segundos para iniciar
                >
                    Su Éxito Es <span className="text-[#b4ab9c] font-extralight ">Nuestro Compromiso.</span>
                </motion.h1>
            </header>

            {/* Shape divider: Layered curves ------------------------------------ */}
            <div className="absolute bottom-0 left-0 w-full leading-[0] pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    className="w-full h-[100px]"
                    role="img"
                    aria-hidden="true"
                >
                    <g fill="#323433">
                        <rect fill="#6b6d72" width="100%" height="100%" />
                        <path
                            d="M500 80.7C358 68 0 4 0 4V0h1000v84.7c-216 23.3-358 8.6-500-4Z"
                            opacity=".3"
                        />
                        <path
                            d="M500 65.7C358 53 0 4 0 4V0h1000v62.7c-216 23.3-358 15.6-500 3Z"
                            opacity=".5"
                        />
                        <path d="M500 50.7C358 38 0 4 0 4V0h1000v40.7C784 64 642 63.3 500 50.7Z" />
                    </g>
                </svg>
            </div>
        </section>
    );
}

export default Hero;
