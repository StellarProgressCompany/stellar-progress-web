// pages/AvisoLegal.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AvisoLegal() {
    return (
        <div className="bg-gray-900 text-gray-200 py-24 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow py-16 px-6">
                <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
                        Aviso Legal
                    </h1>
                    <p className="text-sm text-gray-400 text-center mb-8">
                        Última actualización: 09/02/2025
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            1. Información General
                        </h2>
                        <p><strong>Titular:</strong> Sergi Calls</p>
                        <p><strong>NIF:</strong> 49805766W</p>
                        <p><strong>Domicilio:</strong> Folch i Torres, 98</p>
                        <p><strong>Correo electrónico:</strong> 	info@stellarprogress.es</p>
                        <p><strong>Finalidad del sitio web:</strong> Blog corporativo</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            2. Condiciones de Uso
                        </h2>
                        <p>
                            El acceso y navegación por este sitio web atribuye la condición de <strong>usuario</strong>, lo que implica la aceptación plena de todas las cláusulas de este Aviso Legal.
                        </p>
                        <p className="mt-2">
                            Se prohíbe el uso del sitio web con fines ilícitos o que puedan causar perjuicios a terceros. El titular se reserva el derecho de modificar los contenidos y condiciones sin previo aviso.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            3. Propiedad Intelectual y Derechos de Autor
                        </h2>
                        <p>
                            Todo el contenido publicado en <strong>Stellar Progress</strong> es de libre uso y no está sujeto a derechos de autor.
                        </p>
                        <p className="mt-2">
                            Se prohíbe utilizarlo para fines ilícitos o que puedan perjudicar la imagen del titular.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            4. Exclusión de Responsabilidad
                        </h2>
                        <p>
                            El titular no garantiza la disponibilidad, continuidad ni exactitud del contenido del sitio web.
                        </p>
                        <p className="mt-2">
                            No se hace responsable de daños derivados del uso de la información contenida en esta web.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            5. Enlaces a Terceros
                        </h2>
                        <p>
                            Este sitio web puede incluir enlaces a páginas externas. No se garantiza la veracidad o disponibilidad de dichos enlaces.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            6. Política de Privacidad y Protección de Datos
                        </h2>
                        <p>
                            No se recopilan datos personales sin consentimiento. Si en el futuro se habilitan formularios de contacto, los datos serán tratados conforme a la <a href="/politica-de-privacidad" className="text-yellow-400 hover:underline">Política de Privacidad</a>.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            7. Uso de Cookies
                        </h2>
                        <p>
                            Este sitio web puede utilizar cookies. Para más información, consulta nuestra <a href="/politica-de-cookies" className="text-yellow-400 hover:underline">Política de Cookies</a>.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            8. Legislación Aplicable y Jurisdicción
                        </h2>
                        <p>
                            Este Aviso Legal se rige por la legislación española. En caso de disputa, las partes acuerdan someterse a los tribunales de la ciudad donde reside el titular de la web.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                            9. Contacto
                        </h2>
                        <p>Si tienes dudas sobre este Aviso Legal, puedes contactarnos en:</p>
                        <p className="text-yellow-400">📧 stellarprogresscompany@gmail.com</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
