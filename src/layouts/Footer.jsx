// src/layouts/Footer.jsx

import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'; // Iconos de redes sociales

// Usaremos el logo simple (el que tiene el texto en una línea)
const logoPath = '/assets/images/soluciones-andes_isologo.webp'; 

const Footer = () => {
    
    // Enlaces de navegación rápida
    const quickLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Servicios", href: "#services" },
        { name: "Acerca de", href: "#about" },
        { name: "Contacto", href: "#contact" },
    ];

    // Enlaces Legales o de Información
    const legalLinks = [
        { name: "Términos de Servicio", href: "#terms" },
        { name: "Política de Privacidad", href: "#privacy" },
    ];

    // Enlaces a Redes Sociales (ejemplo)
    const socialLinks = [
        { icon: Facebook, href: "#facebook", label: "Facebook" },
        { icon: Twitter, href: "#twitter", label: "Twitter" },
        { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
        { icon: Github, href: "#github", label: "GitHub" },
    ];

    return (
        // Utilizamos bg-neutral para un color de fondo oscuro, contrastando con la página.
        // El texto será neutral-content (blanco/claro según tu tema).
        <footer className="bg-neutral text-neutral-content py-10 px-4">
            <div className="container mx-auto">
                
                {/* === Contenido Principal del Footer === */}
                {/* footer-center y grid-flow-row son clases de DaisyUI para el layout */}
                <div className="footer flex flex-col md:flex-row justify-between items-start gap-8 border-b border-neutral-content/20 pb-8 mb-8">
                    
                    {/* Sección 1: Logo y Slogan */}
                    <div className="w-full md:w-1/3 flex flex-col items-start">
                        <img src={logoPath} alt="Logo Soluciones Andes" className="h-20 w-auto mb-4" />
                        <p className="text-sm max-w-xs">
                            Soluciones Andes. <br/> 
                            Software robusto para tu negocio.
                        </p>
                    </div>

                    {/* Sección 2: Enlaces Rápidos */}
                    <nav className="w-full md:w-1/5">
                        <h6 className="footer-title text-secondary">Navegación</h6> 
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="link link-hover text-neutral-content/80 hover:text-secondary transition duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav> 
                    
                    {/* Sección 3: Enlaces Legales 
                        <nav className="w-full md:w-1/5">
                            <h6 className="footer-title text-secondary">Legal</h6> 
                            <ul className="space-y-2">
                                {legalLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="link link-hover text-neutral-content/80 hover:text-secondary transition duration-200">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    */}
                    
                    {/* Sección 4: Redes Sociales 
                        <nav className="w-full md:w-1/5">
                            <h6 className="footer-title text-secondary">Síguenos</h6> 
                            <div className="grid grid-flow-col gap-4">
                                {socialLinks.map((link) => (
                                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                                        <link.icon size={24} className="hover:text-secondary transition duration-200" />
                                    </a>
                                ))}
                            </div>
                        </nav>
                    */}
                </div>

                {/* === Derechos de Autor y Créditos === */}
                <div className="text-center md:text-left pt-4">
                    <p className="text-sm text-neutral-content/60">
                        &copy; {new Date().getFullYear()} Soluciones Andes. Todos los derechos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;