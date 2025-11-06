import React from 'react';
import { useForm } from '@formspree/react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Iconos de contacto

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpwovawa"; // Ejemplo: /f/mgegnnqw

const ContactSection = () => {

    const [state, handleSubmit] = useForm(FORMSPREE_ENDPOINT);
    
    

    // Datos de contacto fijos para el lateral
    const contactInfo = [
        { icon: Mail, label: "Correo Electrónico", value: "liobarrozo@solucionesandes.com", href: "mailto:liobarrozo@solucionesandes.com" },
        { icon: Phone, label: "Teléfono", value: "+54 9 261 537 8993", href: "tel:+5492615378993" },
        { icon: MapPin, label: "Ubicación", value: "Trabajamos 100% Remoto", href: "#" },
    ];

    return (
        // Se añade la propiedad id="contact" para el enlace de navegación
        <section id="contact" className="py-20 px-4 bg-base-200">
            <div className="container mx-auto">
                
                {/* Título de la Sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Hablemos de tu Proyecto
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                        Contanos sobre tu problemática. Estamos listos para aplicar la tecnología que tu negocio necesita.
                    </p>
                </div>

                {/* Contenido principal: Formulario y Contacto Lateral */}
                <div className="flex flex-col lg:flex-row gap-12 bg-base-100 p-8 md:p-12 rounded-2xl shadow-2xl">
                    
                    {/* === Formulario de Contacto === */}
                    <div className="lg:w-2/3">
                        <h3 className="text-2xl font-semibold mb-6 text-primary border-b pb-2 border-secondary/50">
                            Envíanos un Mensaje
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Campo Nombre y Email (en fila en desktop) */}
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text text-base-content">Tu Nombre</span>
                                    </label>
                                    {/* AÑADIR NAME: name="Nombre" */}
                                    <input type="text" placeholder="Ej: Juan Pérez" className="input input-bordered w-full" name="Nombre" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text text-base-content">Tu Email</span>
                                    </label>
                                    {/* AÑADIR NAME: name="Email" y type="email" */}
                                    <input type="email" placeholder="ejemplo@correo.com" className="input input-bordered w-full" name="Email" required />
                                </div>
                            </div>
                            
                            {/* Campo de Servicio de Interés */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base-content">Servicio de Interés</span>
                                </label>
                                {/* AÑADIR NAME: name="Servicio" */}
                                <select className="select select-bordered w-full" name="Servicio">
                                    <option disabled selected>Selecciona un servicio</option>
                                    <option>Aplicaciones Web</option>
                                    <option>Páginas Web</option>
                                    <option>Chatbots</option>
                                    <option>Consultoría de Software</option>
                                </select>
                            </div>

                            {/* Campo de Mensaje */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base-content">Mensaje / Requerimiento</span>
                                </label>
                                {/* AÑADIR NAME: name="Mensaje" */}
                                <textarea className="textarea textarea-bordered h-24" placeholder="Describe brevemente lo que necesitas..." name="Mensaje"></textarea>
                            </div>

                            {/* Botón de Envío */}
                            <div className="form-control mt-6">
                                {/* 4. Deshabilitar el botón mientras se envía */}
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg shadow-lg text-primary-content"
                                    disabled={state.submitting} 
                                >
                                    {state.submitting ? 'Enviando...' : 'Enviar Solicitud'}
                                </button>
                                {/* Opcional: Mostrar error si falla el envío */}
                                {state.errors && (
                                    <p className="text-error text-sm mt-2">Hubo un error al enviar. Por favor, inténtalo de nuevo.</p>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* === Información de Contacto Lateral === */}
                    <div className="lg:w-1/3 p-6 bg-base-200 rounded-xl flex flex-col justify-start">
                        <h3 className="text-2xl font-semibold mb-6 text-primary border-b pb-2 border-primary/50">
                            Información Directa
                        </h3>
                        
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <a key={index} href={item.href} className="flex items-start gap-4 p-3 rounded-lg hover:bg-base-300 transition duration-200">
                                    <item.icon size={24} className={`mt-1 ${item.label === 'Ubicación' ? 'text-primary' : 'text-secondary'}`} />
                                    <div>
                                        <p className="font-bold text-lg text-primary">{item.label}</p>
                                        <p className="text-base-content/80 text-sm">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default ContactSection;