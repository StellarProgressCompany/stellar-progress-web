// frontend/src/pages/Contact.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaSpinner } from 'react-icons/fa';
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
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' }); // type: 'success' | 'error'

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // clear previous status
        setStatus({ message: '', type: '' });

        if (!formData.from_name || !formData.email || !formData.message || !formData.privacy) {
            setStatus({
                message: 'Por favor, completa todos los campos y acepta la política de privacidad.',
                type: 'error'
            });
            return;
        }

        setLoading(true);
        try {
            await sendContactMessage({
                from_name: formData.from_name,
                email: formData.email,
                message: formData.message,
            });
            setStatus({
                message: '¡Mensaje enviado con éxito!',
                type: 'success'
            });
            setFormData({ from_name: '', email: '', message: '', privacy: false });
        } catch (err) {
            setStatus({
                message: 'Ocurrió un error al enviar el mensaje.',
                type: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />

            <main className="mb-4">
                {/* Sección 1: Visítanos + Mapa */}
                {/* ...unchanged... */}
            </main>

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
                                        disabled={loading}
                                        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-nav outline-none text-sm disabled:opacity-50"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        disabled={loading}
                                        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-nav outline-none text-sm disabled:opacity-50"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Mensaje"
                                    rows="5"
                                    disabled={loading}
                                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-nav outline-none text-sm disabled:opacity-50"
                                />

                                <label className="flex items-center space-x-2 text-gray-700 text-sm">
                                    <input
                                        type="checkbox"
                                        name="privacy"
                                        checked={formData.privacy}
                                        onChange={handleChange}
                                        disabled={loading}
                                        className="form-checkbox h-5 w-5 text-nav disabled:opacity-50"
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
                                    disabled={loading}
                                    className="w-full py-4 bg-secund text-white font-semibold uppercase hover:bg-nav transition-colors duration-300 text-sm disabled:opacity-50 flex items-center justify-center space-x-2"
                                >
                                    {loading ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            <span>Enviando…</span>
                                        </>
                                    ) : (
                                        'ENVIAR MENSAJE'
                                    )}
                                </button>

                                {status.message && (
                                    <p
                                        className={`
                      mt-4 text-center text-sm inline-block px-4 py-2 rounded-md 
                      ${status.type === 'success'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'}
                      animate-fadeInDown
                    `}
                                    >
                                        {status.message}
                                    </p>
                                )}
                            </form>
                        </AnimatedText>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
