// pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import MissionPhilosophy from '../components/MissionPhilosophy';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function Home() {
    return (
        <>
            <Helmet>
                {/* Title enfocado en el nombre de marca (sin cambios) */}
                <title>Stellar Progress | Transformación Digital y Automatización</title>

                {/* Meta descriptión ampliada con keywords objetivo */}
                <meta
                    name="description"
                    content="Digitalización de restaurantes y comercios con Stellar Progress. Diseño web restaurantes, sistema de reservas restaurantes, automatización y más."
                />
                <meta
                    name="keywords"
                    content="Stellar Progress, Stellar Progress digitalización, digitalización de restaurantes, diseño web restaurantes, sistema de reservas restaurantes"
                />
                <link rel="canonical" href="https://stellarprogress.es/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Stellar Progress | Transformación Digital y Automatización"
                />
                <meta
                    property="og:description"
                    content="Digitalización de restaurantes y comercios con Stellar Progress. Diseño web restaurantes, sistema de reservas restaurantes y automatización."
                />
                <meta property="og:image" content="https://stellarprogress.es/og-image.jpg" />
                <meta property="og:url" content="https://stellarprogress.es/" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Stellar Progress | Transformación Digital y Automatización"
                />
                <meta
                    name="twitter:description"
                    content="Digitalización de restaurantes y comercios con Stellar Progress. Diseño web restaurantes, sistema de reservas restaurantes y automatización."
                />
                <meta name="twitter:image" content="https://stellarprogress.es/og-image.jpg" />

                {/* Datos estructurados (Organization) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Stellar Progress",
                        "url": "https://stellarprogress.es",
                        "logo": "https://stellarprogress.es/logo.png",
                        "description": "Especialistas en digitalización y automatización de restaurantes y comercios.",
                        "contactPoint": [{
                            "@type": "ContactPoint",
                            "telephone": "+34 650 341 022",
                            "contactType": "customer service"
                        }]
                    })}
                </script>
            </Helmet>

            <div className="relative bg-gray-900 text-white">
                <BackgroundAnimation />
                <Navbar />
                <main className="pt-16">
                    <Hero />
                    <Services />
                    <About />
                    <MissionPhilosophy />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Home;
