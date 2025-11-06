// src/sections/AboutSection.jsx

import React from 'react';
import { Target, Lightbulb, Zap, Users } from 'lucide-react'; // Iconos para valores

// Definición de los valores principales de Soluciones Andes
const coreValues = [
    { 
        icon: Lightbulb, 
        title: "Innovación Constante", 
        description: "Aplicamos las últimas tecnologías para ofrecer soluciones de vanguardia que anticipen el futuro digital.",
        color: "text-secondary" // Cian brillante
    },
    { 
        icon: Target, 
        title: "Enfoque en Resultados", 
        description: "Cada línea de código está orientada a resolver un problema real y generar un retorno de inversión tangible para nuestros clientes.",
        color: "text-primary" // Azul oscuro
    },
    { 
        icon: Users, 
        title: "Colaboración Transparente", 
        description: "Trabajamos codo a codo con nuestros clientes, asegurando una comunicación fluida y un proceso de desarrollo abierto.",
        color: "text-accent" // Cian oscuro/verde
    },
    { 
        icon: Zap, 
        title: "Calidad y Escalabilidad", 
        description: "Construimos software robusto y limpio, diseñado para crecer junto con tu negocio sin sacrificar rendimiento.",
        color: "text-warning" // Un color de énfasis fuera de tu paleta principal para contraste
    },
];

const AboutSection = () => {
    // Usamos el mismo logo vertical para mantener la coherencia con el Hero,
    // o podríamos usar una imagen de 'equipo' si existiera.
    const imagePath = '/assets/images/soluciones.jpg'; 

    return (
        // Se añade la propiedad id="about" para el enlace de navegación
        <section id="about" className="py-20 px-4 bg-base-100">
            <div className="container mx-auto">
                
                {/* Título de la Sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Acerca de Soluciones Andes
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                        Somos el motor detrás de tu transformación digital. Nuestra misión es construir el software que te lleva a la cima.
                    </p>
                </div>
                
                {/* Contenido principal (Texto y Valores) */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Bloque de Texto de Historia */}
                    <div className="lg:w-1/2 text-base-content lg:text-left">
                        <h3 className="text-3xl font-semibold mb-6 text-primary">
                            Nuestra Historia y Compromiso
                        </h3>
                        <p className="text-lg mb-4">
                            En Soluciones Andes, creemos que el software debe ser una ventaja competitiva, no solo un gasto. Nacimos de la pasión por la tecnología y la necesidad de ofrecer desarrollos transparentes, eficientes y de alta calidad.
                        </p>
                        <p className="text-lg mb-6 border-l-4 border-secondary pl-4 italic">
                            "No solo desarrollamos, elevamos tu negocio. El impulso de los Andes aplicado a tu software."
                        </p>
                        
                        {/* Botón de Contacto */}
                        <a href="#contact" className="btn btn-secondary mt-4 transform transition duration-300 hover:scale-[1.05]">
                            Conoce a Nuestro Equipo
                        </a>
                    </div>

                    {/* Bloque de Valores Centrales (Grid) */}
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 lg:mt-0">
                        {coreValues.map((value, index) => (
                            <div key={index} className="p-6 bg-base-200 rounded-xl shadow-lg">
                                <value.icon size={32} className={`mb-3 ${value.color}`} />
                                <h4 className="text-xl font-bold text-primary mb-2">
                                    {value.title}
                                </h4>
                                <p className="text-base-content/80 text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;