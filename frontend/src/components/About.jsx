// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/LOGO/LOGO-STELLAR-LLETRES-PNG-BLANC.png'; // Imagen del logo
import upcImage from '../assets/UPC.png'; // Imagen de la UPC

function About() {
    return (
        <section
            id="about"
            className="relative overflow-visible py-20 text-gray-200 bg-pattern-dots bg-gray-900"
        >
            {/* Primera sección: Logo a la derecha, texto a la izquierda */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-16 gap-10">
                <motion.div
                    className="md:w-1/2 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-5xl font-extrabold uppercase mb-6 text-gray-200 border-b-4 inline-block pb-2">
                        Quiénes Somos
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300 my-6">
                        En <strong className="text-white">Stellar Progress</strong>, creemos en el poder de la
                        digitalización para transformar negocios y hacerlos más competitivos en un mundo cada
                        vez más tecnológico. Somos <strong className="text-yellow-400">Sergi y Oriol</strong>,
                        dos jóvenes emprendedores con formación en{' '}
                        <strong className="text-white">Ingeniería Industrial</strong> e{' '}
                        <strong className="text-white">Ingeniería Informática</strong>, apasionados por la
                        tecnología y su impacto en la sociedad. Nuestra misión es clara:{' '}
                        <strong className="text-yellow-400">
                            ayudar a pequeños comercios y negocios de restauración a dar el salto digital
                        </strong>
                        , compitiendo de igual a igual con las grandes cadenas.
                    </p>
                </motion.div>

                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={logoImage}
                        alt="Stellar Progress Logo"
                        className="w-64 md:w-80 lg:w-[400px]"
                    />
                </motion.div>
            </div>

            {/* Segunda sección: Texto a la izquierda, imagen UPC a la derecha */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-10">
                <motion.div
                    className="md:w-1/2 text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-lg leading-relaxed text-gray-300">
                        <strong className="text-white">Stellar Progress</strong> nació en el entorno de la{' '}
                        <strong className="text-yellow-400">Universitat Politècnica de Catalunya (UPC)</strong>,
                        donde dimos forma a nuestra idea y la convertimos en un proyecto real. La formación
                        técnica y el acceso a herramientas avanzadas nos permitieron desarrollar una solución
                        adaptada a las necesidades de los pequeños negocios, combinando innovación y facilidad
                        de uso.
                    </p>
                    <p className="text-lg leading-relaxed my-4 text-gray-300">
                        Sabemos que cada comercio tiene su propia identidad y desafíos, por eso trabajamos para
                        ofrecer herramientas digitales que no solo faciliten la gestión, sino que impulsen su
                        crecimiento de manera sostenible y accesible. Creemos en la tecnología como un medio
                        para fortalecer el tejido comercial local, creando un equilibrio entre la tradición y la
                        innovación.{' '}
                        <strong className="text-yellow-400">
                            Nuestro compromiso es acompañar a cada negocio en su proceso de digitalización, con
                            soluciones efectivas, cercanas y pensadas para su éxito a largo plazo.
                        </strong>
                    </p>
                </motion.div>

                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={upcImage} alt="UPC Logo" className="w-56 md:w-72 mb-8 lg:w-[200px]" />
                </motion.div>
            </div>

            {/* Shape divider al final de About */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none leading-[0] transform rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    className="w-full h-[100px] block"
                >
                    {/* Fondo gris-900 para cubrir toda el área SVG */}
                    <rect fill="#111827" width="100%" height="100%" />
                    {/* Curva en gris-700 */}
                    <path
                        fill="#374151"
                        d="M0 0v36L250 4l750 96V0H0z"
                    />
                </svg>
            </div>
        </section>
    );
}

export default About;
