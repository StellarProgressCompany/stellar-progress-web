// pages/Cookies.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cookies() {
    return (
        <div className="bg-gray-900 text-gray-200 py-24 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow py-16 px-6">
                <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
                        Política de Cookies
                    </h1>
                    <p className="text-sm text-gray-400 text-center mb-8">
                        Última actualización: 09/02/2025
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            1. ¿Qué son las cookies?
                        </h2>
                        <p>
                            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                            cuando visitas una página web. Se utilizan para recordar información sobre
                            tu navegación y mejorar tu experiencia.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            2. ¿Qué tipos de cookies usamos?
                        </h2>
                        <p>
                            En <strong>Stellar Progress</strong> utilizamos los siguientes tipos de cookies:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la web. No requieren consentimiento.</li>
                            <li><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los usuarios interactúan con la web, mejorando su rendimiento.</li>
                            <li><strong>Cookies publicitarias:</strong> Permiten mostrar anuncios personalizados basados en los intereses del usuario.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            3. ¿Cómo puedes gestionar las cookies?
                        </h2>
                        <p>
                            Puedes eliminar o bloquear las cookies desde la configuración de tu navegador. Sin embargo,
                            algunas cookies son esenciales para el correcto funcionamiento de la web.
                        </p>
                        <p className="mt-2">
                            En esta web, solo ofrecemos la opción de <strong>aceptar todas las cookies</strong> en el aviso de cookies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            4. ¿Cuánto tiempo almacenamos las cookies?
                        </h2>
                        <p>
                            Las cookies se almacenan en tu dispositivo durante un periodo variable según su tipo:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Cookies de sesión:</strong> Se eliminan automáticamente al cerrar el navegador.</li>
                            <li><strong>Cookies persistentes:</strong> Pueden mantenerse activas entre 30 días y 1 año, dependiendo del servicio.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            5. Servicios de terceros y transferencia de datos
                        </h2>
                        <p>
                            Nuestros servidores están ubicados en <strong>Francia</strong>, dentro de la Unión Europea. No realizamos transferencias de datos fuera del EEE.
                        </p>
                        <p className="mt-2">
                            Algunos servicios de terceros como <strong>Google Analytics</strong> y <strong>Google Ads</strong> pueden recopilar datos anónimos
                            sobre el uso del sitio web.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            6. Contacto
                        </h2>
                        <p>
                            Si tienes dudas sobre esta política, puedes contactarnos a través de:
                        </p>
                        <p className="text-yellow-400">📧 	info@stellarprogress.es</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
