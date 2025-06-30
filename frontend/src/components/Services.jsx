// components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    ChartBarIcon,
    GlobeAltIcon,
    ArrowDownTrayIcon,
    CheckIcon,
} from '@heroicons/react/24/solid';
import pdfFile from '../assets/Servicios_ESP.pdf';

// Contenido de cada sección de servicios
const servicesData = [
    {
        id: 1,
        title: 'Transformación Digital: Desarrollo Web',
        icon: <GlobeAltIcon className="w-10 h-10 text-[#3a393e]" aria-hidden="true" />,
        features: [
            <div className="group" key="1">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal pt-4 transition-transform duration-1000">
                        Diseño web a medida → Una identidad digital única
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Creamos páginas web profesionales desde cero, programadas al 100% sin plantillas, garantizando un diseño exclusivo y adaptado a la esencia de su restaurante.
                </div>
            </div>,
            <div className="group" key="2">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Estética personalizada → La imagen que su negocio merece
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Nos adaptamos a su estilo y preferencias, combinando tendencias modernas con acabados de alta calidad para ofrecer una web visualmente atractiva y funcional.
                </div>
            </div>,
            <div className="group" key="3">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Rendimiento optimizado → Rápida, segura y adaptada a cualquier dispositivo
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Nuestras páginas están diseñadas para cargar con velocidad, ofrecer una navegación fluida y ser totalmente responsivas en móviles, tablets y ordenadores.
                </div>
            </div>,
            <div className="group" key="4">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform font-normal text-xl transition-transform duration-300">
                        Actualizaciones constantes → Una web siempre al día
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Nos encargamos del mantenimiento y actualización de su sitio web, asegurando que esté optimizado, seguro y alineado con las necesidades cambiantes de su negocio.
                </div>
            </div>,
            <div className="group" key="5">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform font-normal text-xl transition-transform duration-300">
                        Soporte técnico 24/7 → Respuesta inmediata ante cualquier imprevisto
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Un equipo siempre disponible para resolver cualquier problema, hacer ajustes o implementar mejoras cuando lo necesite.
                </div>
            </div>,
            <div className="group" key="6">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform font-normal text-xl transition-transform duration-300">
                        Integración con herramientas digitales → Más que una web, un sistema eficiente
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Conectamos su página con reservas, pedidos online, automatización de clientes y herramientas de marketing para potenciar su negocio al máximo.
                </div>
            </div>,
            <div className="group" key="7">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Gestión sin complicaciones → Nos encargamos de todo por usted
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Olvídese de problemas técnicos y dedique su tiempo a lo que realmente importa. Nosotros garantizamos que su presencia digital funcione de manera impecable.
                </div>
            </div>,
        ],
    },
    {
        id: 2,
        title: ' Software de Reservas para Restaurantes',
        icon: <ChartBarIcon className="w-10 h-10 text-[#3a393e]" aria-hidden="true" />,
        features: [
            <div className="group" key="1">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal pt-4 transition-transform duration-300">
                        Menos tiempo gestionando reservas → Más enfoque en su negocio
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Nuestra plataforma automatiza gran parte del proceso de reservas a través de la web, reduciendo llamadas y mensajes manuales. Su equipo dedicará menos tiempo a la administración y más a ofrecer un excelente servicio.
                </div>
            </div>,
            <div className="group" key="2">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Confirmaciones y recordatorios automáticos → Reducción de ausencias
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Cada reserva se confirma y recuerda automáticamente por WhatsApp o email, minimizando cancelaciones de última hora y asegurando una ocupación más estable.
                </div>
            </div>,
            <div className="group" key="3">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Asignación inteligente de mesas → Espacio optimizado sin esfuerzo
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    El sistema distribuye las mesas automáticamente según la capacidad y reservas del restaurante, eliminando la necesidad de organizar manualmente la disposición de los clientes.
                </div>
            </div>,
            <div className="group" key="4">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Cancelaciones sin impacto → Lista de espera automatizada
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Cuando un cliente cancela, nuestro sistema lo reemplaza de inmediato con la siguiente persona en lista de espera, evitando huecos en la agenda y maximizando la ocupación.
                </div>
            </div>,
            <div className="group" key="5">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Comunicación automática con clientes → Menos tiempo respondiendo consultas
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Los clientes reciben automáticamente información sobre su reserva, ubicación, menú y disponibilidad, reduciendo la carga de trabajo del personal y mejorando la experiencia del usuario.
                </div>
            </div>,
            <div className="group" key="6">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Reportes automáticos → Control total en un clic
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Obtenga informes mensuales detallados sobre reservas, ocupación y tendencias, sin necesidad de recopilar datos manualmente.
                </div>
            </div>,
            <div className="group" key="7">
                <div className="flex items-center">
                    <CheckIcon className="w-7 h-7 text-green-500 mr-2" aria-hidden="true" />
                    <strong className="cursor-pointer transform text-xl font-normal transition-transform duration-300">
                        Feedback sin esfuerzo → Opiniones automatizadas para mejorar su servicio
                    </strong>
                </div>
                <div className="mt-0 overflow-hidden max-h-0 opacity-0 transition-all duration-1000 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100 w-90 p-3 bg-gray-300 bg-opacity-90 text-gray-800 text-s rounded">
                    Envíe encuestas automáticas tras cada visita y reciba valoraciones en tiempo real, optimizando la experiencia del cliente sin invertir tiempo extra.
                </div>
            </div>,
        ],
    },
];

function Services() {
    return (
        <section
            id="services"
            className="relative overflow-visible pt-24 pb-16 bg-[#6b6d72]"
            role="region"
            aria-labelledby="services-heading"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2
                        id="services-heading"
                        className="text-4xl md:text-4xl font-medium text-white"
                    >
                        Digitalización y automatización sin complicaciones
                    </h2>
                    <p className="mt-2 text-yellow-400">
                        - Especializados en Industria & Restauración  -
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesData.map((service) => (
                        <motion.article
                            key={service.id}
                            className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            aria-labelledby={`service-${service.id}-title`}
                        >
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3
                                id={`service-${service.id}-title`}
                                className="text-2xl font-medium mb-2"
                            >
                                {service.title}
                            </h3>
                            <ul className="list-none pl-0 mb-4 space-y-2">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button
                                onClick={() => {
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="mt-auto bg-[#b4ab9c] text-white py-2 px-4 rounded-2xl font-medium text-xl  hover:bg-[#3a393e] transition-colors"
                                aria-label={`Contactar para ${service.title}`}
                            >
                                Contáctanos
                            </button>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl py-3 mt-6 font-medium text-white mb-4">
                        Descarga toda la Información de Nuestros Servicios
                    </h3>
                    <a
                        href={pdfFile}
                        download="Servicios_Restauracion.pdf"
                        className="bg-[#b4ab9c] text-white py-3 px-6 mb-6 rounded-3xl flex items-center justify-center mx-auto w-52 hover:bg-[#3a393e] transition-colors"
                        aria-label="Descargar PDF de Servicios de Stellar Progress"
                        rel="noopener noreferrer"
                        title="Descargar PDF de servicios de digitalización y automatización de restaurantes"
                    >
                        <ArrowDownTrayIcon className="w-6 h-6 mr-2" aria-hidden="true" />
                        Descargar PDF
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full pointer-events-none leading-[0] transform rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    className="w-full h-[100px] block"
                    role="img"
                    aria-hidden="true"
                >
                    {/* Base opaca (bg-gray-900) */}
                    <path
                        fill="#323433"
                        d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"
                    />
                    {/* Capas semitransparentes */}
                    <path
                        fill="#323433"
                        opacity=".5"
                        d="M617 1v86C372 119 384 1 196 1h421Z"
                    />
                    <path
                        fill="#323433"
                        opacity=".5"
                        d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z"
                    />
                    <path
                        fill="#323433"
                        opacity=".5"
                        d="M0 1v99c134.3 0 153.7-99 296-99H0Z"
                    />
                </svg>
            </div>
        </section>
    );
}

export default Services;
