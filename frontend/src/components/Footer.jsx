// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id="contact" className="py-8 bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 text-center">
                <motion.p
                    className="text-sm mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    &copy; {new Date().getFullYear()} Stellar Progress. Todos los derechos reservados.
                </motion.p>

                {/* Enlaces legales */}
                <div className="flex justify-center space-x-4 text-sm">
                    <Link to="/aviso-legal" className="hover:text-yellow-500 transition-colors">
                        Aviso Legal
                    </Link>
                    <Link to="/politica-de-privacidad" className="hover:text-yellow-500 transition-colors">
                        Política de Privacidad
                    </Link>
                    <Link to="/politica-de-cookies" className="hover:text-yellow-500 transition-colors">
                        Política de Cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
