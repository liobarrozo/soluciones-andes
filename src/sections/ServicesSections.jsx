import GlareHover from '../components/GlareHover'
import React from 'react';
import { Sparkles, Bot, Globe } from 'lucide-react'; // Importamos iconos modernos de 'lucide-react'

// NOTA: Para que los íconos funcionen, debes tener instalada la librería lucide-react.
// Si aún no la tienes, puedes instalarla con: npm install lucide-react

// Definición de los datos de cada servicio
const servicesData = [
    {
        icon: Globe, // Icono para Páginas Web
        title: "Páginas Web Profesionales",
        description: "Diseño y desarrollo de sitios web modernos, optimizados para SEO y totalmente responsivos. Garantizamos una presencia digital impactante y funcional.",
        tag: "Presencia digital",
        color: "bg-primary text-primary-content", // Utiliza el color primario
    },
    {
        icon: Sparkles, // Icono para Apps Web (Producto Estrella)
        title: "Aplicaciones Web",
        description: "Creamos soluciones web complejas y escalables (SaaS, plataformas internas), que impulsan la eficiencia y automatizan procesos clave de tu negocio.",
        tag: "Innovación & Crecimiento",
        color: "bg-secondary text-secondary-content", // Utiliza el color secundario/acento
    },
    {
        icon: Bot, // Icono para Chatbots
        title: "Integración de Chatbots Inteligentes",
        description: "Implementamos chatbots para mejorar la atención al cliente 24/7, aumentar la tasa de conversión y optimizar la gestión de consultas.",
        tag: "Automatización",
        color: "bg-accent text-accent-content", // Utiliza el color de acento
    },
];

const ServicesSection = () => {

    const glareProps = {
        glareColor: "#ffffff",
        glareOpacity: 0.4, // Un poco más de brillo para destacar
        glareAngle: -30,
        glareSize: 300,
        transitionDuration: 800,
        playOnce: false,
    };

    const ServiceCard = ({ service }) => (
        // La tarjeta de DaisyUI necesita una altura para que el efecto se vea bien.
        // Añadimos una altura relativa (h-full) y nos aseguramos de que el padre la defina.
        <div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 h-full"
            style={{ minHeight: '350px' }}
        >
            <div className="card-body items-center text-center p-8">
                
                {/* Icono */}
                <div className={`p-4 rounded-full mb-4 ${service.color}`}>
                    <service.icon size={48} className="stroke-current" />
                </div>

                {/* Título */}
                <h3 className="card-title text-2xl font-semibold text-primary mb-2">
                    {service.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-base-content/80 mb-4">{service.description}</p>
                
                {/* Etiqueta (Badge) */}
                <div className="card-actions justify-end">
                    <div className={`badge badge-outline text-sm font-medium border-secondary text-secondary`}>
                        {service.tag}
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        // Se añade la propiedad id="services" para el enlace de navegación
        <section id="services" className="py-20 bg-base-200 px-4">
            <div className="container mx-auto">
                
                {/* Título de la Sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Nuestros Servicios de Software
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Ofrecemos soluciones tecnológicas avanzadas, enfocadas en la **calidad**, la **escalabilidad** y el **impacto** en tu negocio.
                    </p>
                </div>

                {/* Grid de Tarjetas de Servicio */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {servicesData.map((service, index) => {
                        
                        // ⭐️ Lógica Condicional para aplicar GlareHover ⭐️
                        if (service.title === "Actualmente en desuso") {
                            return (
                                <div key={index} className="relative z-10 h-full">
                                    {/* 1. Aplicamos el GlareHover SÓLO a esta Card */}
                                    <GlareHover {...glareProps}>
                                        <ServiceCard service={service} />
                                    </GlareHover>
                                </div>
                            );
                        } else {
                            return (
                                // 2. Las demás Cards se renderizan normalmente
                                <div key={index} className="h-full">
                                    <ServiceCard service={service} />
                                </div>
                            );
                        }
                    })}
                </div>

                {/* CTA Inferior */}
                <div className="text-center mt-16">
                    <p className="text-lg mb-6 text-base-content">
                        ¿Tienes un problema específico? Hablemos de cómo la tecnología puede ayudarte.
                    </p>
                    <a href="#contact" className="btn btn-secondary btn-lg shadow-xl">
                        Solicitar Consulta
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;