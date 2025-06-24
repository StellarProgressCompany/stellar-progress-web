// src/pages/Contact.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText.jsx';
import ft10 from '../assets/10.jpeg';
import { sendContactMessage } from '../services/contactService';

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: '',
        privacy: false,
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.from_name || !formData.email || !formData.message || !formData.privacy) {
            setStatusMessage('❌ Por favor, completa todos los campos y acepta la política de privacidad.');
            return;
        }

        try {
            await sendContactMessage({
                from_name: formData.from_name,
                email: formData.email,
                message: formData.message,
            });
            setStatusMessage('✅ ¡Mensaje enviado con éxito!');
            setFormData({ from_name: '', email: '', message: '', privacy: false });
        } catch (err) {
            setStatusMessage('❌ Ocurrió un error al enviar el mensaje.');
        }
    };

    return (
        <>
            <Navbar />

            <main className="mb-4">
                {/* Sección 1: Visítanos + Mapa */}
                <section className="bg-white mt-24 sm:mt-32 py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <AnimatedText>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair">
                                    VISÍTANOS
                                </h2>
                            </AnimatedText>
                            <AnimatedText>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    Te esperamos en <strong>La Masia</strong>, un rincón de la auténtica cocina
                                    catalana en Vacarisses. Disfruta de un ambiente cálido y platos
                                    tradicionales elaborados con pasión.
                                </p>
                            </AnimatedText>
                            <AnimatedText>
                                <h3 className="text-base sm:text-lg font-bold text-secund uppercase">
                                    VACARISSES
                                </h3>
                            </AnimatedText>
                            <AnimatedText>
                                <address className="not-italic text-gray-800 text-sm sm:text-base">
                                    Cami de la Pineda, 98<br />
                                    Vacarisses, 08233
                                </address>
                            </AnimatedText>
                            <AnimatedText>
                                <p className="flex items-center text-gray-800 text-sm sm:text-base">
                                    <FaPhone className="mr-2" />+34&nbsp;683&nbsp;379&nbsp;643
                                </p>
                            </AnimatedText>
                            <AnimatedText>
                                <p className="flex items-center text-gray-800 text-sm sm:text-base">
                                    <FaEnvelope className="mr-2" />info@restaurantmasia.cat
                                </p>
                            </AnimatedText>
                        </div>
                        <AnimatedText>
                            <div className="w-full h-60 sm:h-72 md:h-96 shadow-lg overflow-hidden rounded-lg">
                                <iframe
                                    title="Mapa Restaurante La Masia"
                                    src="https://www.google.com/maps?q=Cami%20de%20la%20Pineda%2098%2C%20Vacarisses%2008233&output=embed"
                                    width="100%"
                                    height="100%"
                                    className="border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </AnimatedText>
                    </div>
                </section>

                {/* Sección 2: Foto + Formulario */}
                <section className="bg-fondo py-16 pb-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <AnimatedText>
                            <div>
                                <img
                                    src={ft10}
                                    alt="Restaurante La Masia"
                                    className="w-full rounded-lg mb-8 md:mb-32 pt-0 md:pt-8 shadow-lg"
                                />
                            </div>
                        </AnimatedText>

                        <div className="space-y-6">
                            <AnimatedText>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair">
                                    CONTÁCTANOS
                                </h2>
                            </AnimatedText>
                            <AnimatedText>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    ¡Queremos saber de ti! Rellena el formulario o escríbenos por correo
                                    electrónico o teléfono, y nuestro equipo se pondrá en contacto contigo
                                    lo antes posible.
                                </p>
                            </AnimatedText>

                            <AnimatedText>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="from_name"
                                            value={formData.from_name}
                                            onChange={handleChange}
                                            placeholder="Nombre"
                                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-nav outline-none text-sm"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-nav outline-none text-sm"
                                            required
                                        />
                                    </div>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Mensaje"
                                        rows="5"
                                        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-nav outline-none text-sm"
                                        required
                                    />

                                    <label className="flex items-center space-x-2 text-gray-700 text-sm">
                                        <input
                                            type="checkbox"
                                            name="privacy"
                                            checked={formData.privacy}
                                            onChange={handleChange}
                                            className="form-checkbox h-5 w-5 text-nav"
                                            required
                                        />
                                        <span>
                      He leído y acepto la{' '}
                                            <Link to="/politica-de-privacidad" className="text-nav underline">
                        Política de Privacidad
                      </Link>
                    </span>
                                    </label>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-secund text-white font-semibold uppercase hover:bg-nav transition-colors duration-300 text-sm"
                                    >
                                        ENVIAR MENSAJE
                                    </button>

                                    {statusMessage && (
                                        <p className="mt-2 text-center text-sm text-red-500">
                                            {statusMessage}
                                        </p>
                                    )}
                                </form>
                            </AnimatedText>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
