import React from 'react';


const Header = () => {
    // Definición de los enlaces principales de la navegación
    const navLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Servicios", href: "#services" },
        { name: "Acerca de", href: "#about" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        // La etiqueta 'header' es semánticamente correcta para la barra de navegación
        <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-sm shadow-md">
            <div className="navbar container mx-auto px-4">
                
                {/* === Sección Izquierda: Logo y Menú Móvil === */}
                <div className="navbar-start">
                    
                    {/* Menú Desplegable (Dropdown) para Móviles */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {/* Icono de Hamburguesa */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-base-content hover:text-secondary">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo de la Empresa (Visible siempre) */}
                    <a href="#hero" className="flex items-center">
                        <img 
                            src="/assets/images/soluciones-andes_isologo.webp" 
                            alt="Isologo Soluciones Andes" 
                            className="h-10 sm:h-12 w-auto" 
                        />
                    </a>
                </div>

                {/* === Sección Central: Enlaces de Escritorio === */}
                {/* Se oculta en móvil y se muestra en pantalla grande (lg:flex) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-base-content font-medium hover:text-secondary text-lg px-4">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* === Sección Final: Botón de Llamada a la Acción (CTA) === */}
                <div className="navbar-end">
                    <a href="#contact" className="btn btn-primary text-primary-content hover:bg-primary-focus">
                        ¡Empecemos!
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Header;