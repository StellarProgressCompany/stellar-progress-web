// components/MissionPhilosophy.jsx
import React from 'react';
import { motion } from 'framer-motion';
import businessDiscussion from '../assets/business-discussion.jpg';
import handshake from '../assets/handshake.jpg';
import laptop from '../assets/Laptop.jpg';

const sections = [
    {
        id: 1,
        title: 'Nuestro Reto 🎯',
        image: businessDiscussion,
        text: (
            <>
                En <strong>Stellar Progress</strong>, ayudamos a los restaurantes y comercios a{' '}
                <strong>adaptarse, evolucionar y prosperar</strong> en un entorno en constante cambio.
                <br /><br />
                Nos especializamos en{' '}
                <strong>digitalización, automatización y optimización de procesos</strong>, aplicando
                soluciones que transforman negocios.
                <br /><br />
                Nuestro objetivo es claro:{' '}
                <strong>mejorar la eficiencia, reducir costos y potenciar el crecimiento</strong> de cada
                cliente con herramientas innovadoras.
                <br /><br />
                Sabemos que cada negocio es único, por eso{' '}
                <strong>nos adaptamos a sus necesidades</strong> para que puedan afrontar el futuro con
                confianza.
            </>
        ),
    },
    {
        id: 2,
        title: 'Nuestra Filosofía 🌟',
        image: handshake,
        text: (
            <>
                En <strong>Stellar Progress</strong>, creemos en la importancia de los{' '}
                <strong>pequeños detalles</strong> y el{' '}
                <strong>compromiso con nuestros clientes</strong>.
                <br /><br />
                La <strong>pasión por la perfección</strong> y la{' '}
                <strong>confianza en nuestro trabajo</strong> son esenciales para ofrecer un servicio de
                calidad.
                <br /><br />
                Nos tomamos en serio cada proyecto, asegurándonos de que cada solución sea{' '}
                <strong>a medida</strong> y responda a las{' '}
                <strong>necesidades específicas</strong> de cada cliente.
                <br /><br />
                Porque más que tecnología, ofrecemos{' '}
                <strong>confianza, personalización y excelencia</strong> en cada proyecto.
            </>
        ),
    },
    {
        id: 3,
        title: 'Nuestras Herramientas 🚀',
        image: laptop,
        text: (
            <>
                Para crear sitios web <strong>rápidos, modernos y de alta calidad</strong>, utilizamos las
                mejores tecnologías del mercado.
                <br /><br />
                🛠️ <strong>React y Laravel</strong> nos permiten construir plataformas{' '}
                <strong>eficientes y escalables</strong>.
                <br /><br />
                🎨 <strong>TailwindCSS</strong> aporta un diseño <strong>ágil, atractivo y optimizado</strong>.
                <br /><br />
                💻 <strong>PHPStorm</strong> nos ofrece un entorno de desarrollo{' '}
                <strong>rápido y potente</strong>.
                <br /><br />
                🌍 <strong>Servidores VPS profesionales</strong> garantizan{' '}
                <strong>velocidad, estabilidad y seguridad en nuestras páginas web</strong>.
                <br /><br />
                Combinamos todas estas herramientas para ofrecer{' '}
                <strong>soluciones innovadoras y adaptadas a cada cliente</strong>. Porque en{' '}
                <strong>Stellar Progress</strong>, la calidad es nuestro estándar.
            </>
        ),
    },
];

function MissionPhilosophy() {
    return (
        <section
            id="mission-philosophy"
            className="py-32 bg-gray-700"
            role="region"
            aria-labelledby="mission-philosophy-heading"
        >
            <div className="container mx-auto px-6 mb-12">
                <h2
                    id="mission-philosophy-heading"
                    className="text-4xl md:text-5xl font-bold text-white text-center"
                >
                    Misión y Filosofía de Stellar Progress
                </h2>
            </div>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <motion.article
                            key={section.id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            aria-labelledby={`mp-title-${section.id}`}
                        >
                            <picture>
                                <source srcSet={section.image} type="image/jpeg" />
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    loading="lazy"
                                    width="600"
                                    height="400"
                                    className="w-full h-48 object-cover"
                                />
                            </picture>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3
                                    id={`mp-title-${section.id}`}
                                    className="text-2xl font-bold mb-4 text-gray-200"
                                >
                                    {section.title}
                                </h3>
                                <div className="flex-grow mb-4 text-gray-200">
                                    {section.text}
                                </div>
                                <button
                                    onClick={() => {
                                        document
                                            .getElementById('contact')
                                            ?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="mt-auto bg-yellow-500 text-white py-2 text-xl font-bold px-4 rounded hover:bg-yellow-600 transition-colors"
                                    aria-label={`Contáctanos sobre ${section.title}`}
                                >
                                    Contáctanos
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MissionPhilosophy;
