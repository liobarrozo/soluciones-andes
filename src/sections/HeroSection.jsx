// src/sections/HeroSection.jsx

import React from 'react';

const largeLogoPath = '/assets/images/soluciones-andes_logo.webp'; 

const HeroSection = () => {
    return (
        // Sección principal con padding superior e inferior y el color de fondo base
        // Se añade la propiedad id="hero" para que el enlace del Header funcione
        <section id="hero" className="min-h-[80vh] flex items-center bg-base-100 py-5 px-4">
            
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-10">
                
                {/* === Contenido de Texto y CTA === */}
                <div className="lg:w-1/2 text-center order-2 lg:order-1 lg:text-left">
                    
                    {/* Título Principal */}
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-primary">
                        Transformamos <span className="text-secondary">Ideas</span> en <span className="text-secondary">Software</span> de Alto Rendimiento
                    </h1>

                    {/* Subtítulo / Propuesta de Valor */}
                    <p className="text-xl md:text-2xl mb-8 text-base-content/80 max-w-xl mx-auto lg:mx-0">
                        Somos aliado estratégico en el desarrollo de aplicaciones web. Innovación, eficiencia y escalabilidad.
                    </p>

                    {/* Botones de Llamada a la Acción (CTA) */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        
                        <a href="#contact" className="btn btn-secondary btn-lg shadow-xl text-secondary-content font-bold transform transition duration-300 hover:scale-[1.03]">
                            Empezar mi Proyecto Hoy
                        </a>
                        
                        <a href="#services" className="btn btn-outline btn-primary btn-lg transform transition duration-300 hover:bg-primary/10">
                            Ver Servicios
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2 order-1 lg:order-2 lg:mt-0 flex justify-center">
                    <div className="relative w-full max-w-2xs md:max-w-md lg:max-w-lg">
                        <img 
                            src={largeLogoPath} 
                            alt="Logo Soluciones Andes" 
                            className="w-full h-auto rounded-xl " 
                            style={{ filter: 'drop-shadow(0 0 1rem var(--color-secondary))' }}
                        />
                        
                        {/* Efecto de fondo sutil con los colores de tu paleta */}
                        <div className="absolute inset-0 bg-secondary opacity-10 blur-3xl rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;