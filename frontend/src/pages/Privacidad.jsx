// pages/Privacidad.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacidad() {
    return (
        <div className="bg-gray-900 text-gray-200 pt-24 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow py-16 px-6">
                <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
                        Política de Privacidad
                    </h1>
                    <p className="text-sm text-gray-400 text-center mb-8">
                        Última actualización: 09/02/2025
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            1. Identidad del Responsable del Tratamiento
                        </h2>
                        <p><strong>Titular:</strong> Sergi Calls</p>
                        <p><strong>NIF:</strong> 49805766W</p>
                        <p><strong>Domicilio:</strong> Folch i Torres, 98</p>
                        <p><strong>Correo electrónico:</strong> 	info@stellarprogress.es</p>
                        <p><strong>Finalidad del sitio web:</strong> Blog corporativo</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            2. Datos Personales Recopilados
                        </h2>
                        <p>Este sitio web recopila dos tipos de datos personales:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Datos de contacto:</strong> Nombre, correo electrónico, teléfono y mensaje.</li>
                            <li><strong>Cookies:</strong> Información de navegación (ver nuestra <a href="/politica-de-cookies" className="text-yellow-400 hover:underline">Política de Cookies</a>).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            3. Finalidad del Tratamiento de los Datos
                        </h2>
                        <p>Los datos personales recopilados en este sitio web tienen una finalidad exclusivamente comunicativa:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Responder a las consultas enviadas por los usuarios.</li>
                            <li>Gestionar la comunicación con los usuarios.</li>
                        </ul>
                        <p className="mt-2">
                            <strong>No se utilizarán los datos para publicidad ni newsletters sin consentimiento expreso.</strong>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            4. Derechos de los Usuarios
                        </h2>
                        <p>Los usuarios pueden ejercer los siguientes derechos conforme al RGPD:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Acceso, rectificación y supresión</strong> de datos personales.</li>
                            <li><strong>Oposición</strong> al tratamiento de datos.</li>
                            <li><strong>Portabilidad y derecho al olvido.</strong></li>
                        </ul>
                        <p className="mt-2">
                            Para ejercer estos derechos, el usuario puede enviar un correo a <a href="mailto:stellarprogresscompany@gmail.com" className="text-yellow-400 hover:underline">stellarprogresscompany@gmail.com</a>.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            5. Tiempo de Conservación de los Datos
                        </h2>
                        <p>Los datos personales serán conservados durante <strong>4 años</strong> o hasta que el usuario solicite su eliminación.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            6. Medidas de Seguridad
                        </h2>
                        <p>Se han implementado <strong>medidas básicas de seguridad</strong> para proteger los datos personales, incluyendo:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Uso de protocolo <strong>HTTPS</strong> para la transmisión segura de datos.</li>
                            <li>Control de acceso restringido a los datos personales.</li>
                        </ul>
                        <p className="mt-2">Sin embargo, el usuario debe ser consciente de que ningún sistema es completamente seguro en internet.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            7. Uso de Servicios de Terceros
                        </h2>
                        <p>Este sitio web podría llegar a utilizar herramientas de terceros en el futuro. En tal caso, se actualizará esta Política de Privacidad.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            8. Transferencias Internacionales de Datos
                        </h2>
                        <p>Los datos personales se almacenan en servidores ubicados en la <strong>Unión Europea (UE)</strong> y no se realizan transferencias de datos fuera del Espacio Económico Europeo.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            9. Contacto
                        </h2>
                        <p>Para cualquier consulta sobre esta Política de Privacidad, los usuarios pueden contactar a través de:</p>
                        <p className="text-yellow-400">📧 stellarprogresscompany@gmail.com</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
