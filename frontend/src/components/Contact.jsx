// src/components/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendContactMessage } from '../services/contactService';
import backgroundImage from '../assets/business2.jpg';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: '',
        privacy: false,
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: '', type: '' });
        if (
            !formData.from_name ||
            !formData.email ||
            !formData.message ||
            !formData.privacy
        ) {
            setStatus({
                message:
                    'Por favor, completa todos los campos y acepta la política de privacidad.',
                type: 'error',
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
                message: '✅ ¡Mensaje enviado con éxito!',
                type: 'success',
            });
            setFormData({
                from_name: '',
                email: '',
                message: '',
                privacy: false,
            });
        } catch (err) {
            console.error(err);
            setStatus({
                message: '❌ Ocurrió un error al enviar el mensaje.',
                type: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    return (
        <section
            id="contact"
            role="region"
            aria-labelledby="contact-heading"
            className="min-h-screen flex items-center justify-center bg-stone-600 bg-cover bg-center py-24"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
      <span className="sr-only">
        Fondo de contacto con temática de negocios
      </span>

            <motion.div
                {...fadeIn}
                className="bg-black bg-opacity-70 p-8 rounded-3xl shadow-lg max-w-md w-full space-y-6"
            >
                <motion.h2
                    {...fadeIn}
                    id="contact-heading"
                    className="text-3xl font-semibold text-gray-100 text-center"
                >
                    Contacto
                </motion.h2>

                <motion.p {...fadeIn} className="text-gray-200 text-center">
                    Rellena el formulario y te responderemos lo antes posible.
                </motion.p>

                <motion.form
                    {...fadeIn}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                >
                    <motion.input
                        {...fadeIn}
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        disabled={loading}
                        className="w-full p-3 bg-[#6b6d72] text-gray-200 rounded-3xl border border-[#6b6d72] focus:ring-2 focus:ring-white outline-none disabled:opacity-50"
                    />

                    <motion.input
                        {...fadeIn}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Correo Electrónico"
                        disabled={loading}
                        className="w-full p-3 bg-[#6b6d72] text-gray-200 rounded-3xl border border-[#6b6d72] focus:ring-2 focus:ring-white outline-none disabled:opacity-50"
                    />

                    <motion.textarea
                        {...fadeIn}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mensaje"
                        rows="4"
                        disabled={loading}
                        className="w-full p-3 bg-[#6b6d72] text-gray-200 rounded-3xl border border-[#6b6d72] focus:ring-2 focus:ring-white outline-none disabled:opacity-50"
                    />

                    <motion.label
                        {...fadeIn}
                        className="flex items-center space-x-2 text-gray-200 text-sm"
                    >
                        <input
                            type="checkbox"
                            name="privacy"
                            checked={formData.privacy}
                            onChange={handleChange}
                            disabled={loading}
                            className="form-checkbox h-5 w-5 text-yellow-500 disabled:opacity-50"
                        />
                        <span>
              Acepto la{' '}
                            <Link
                                to="/politica-de-privacidad"
                                className="text-[#b4ab9c] underline"
                            >
                Política de Privacidad
              </Link>
            </span>
                    </motion.label>

                    <motion.button
                        {...fadeIn}
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center space-x-2 py-3 bg-[#b4ab9c] text-gray-900 font-semibold uppercase rounded-3xl hover:bg-[#dcd7c9] transition disabled:opacity-50"
                    >
                        {loading ? (
                            <>
                                <FaSpinner className="animate-spin" />
                                <span>Enviando…</span>
                            </>
                        ) : (
                            'ENVIAR MENSAJE'
                        )}
                    </motion.button>
                </motion.form>

                {status.message && (
                    <motion.p
                        {...fadeIn}
                        className={`mt-4 text-center text-sm inline-block px-4 py-2 rounded-3xl ${
                            status.type === 'success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {status.message}
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
}
