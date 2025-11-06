// src/sections/ContactSection.jsx

import React from 'react';
import { useForm, ValidationError } from '@formspree/react'; // <-- Importamos ValidationError para seguir la guía de Formspree
import { Mail, Phone, MapPin } from 'lucide-react'; 

// ¡CORRECCIÓN! Solo el ID, no la URL completa.
const FORMSPREE_ID = "mpwovawa"; 

const ContactSection = () => {

    // 1. Usamos el ID directamente.
    const [state, handleSubmit] = useForm(FORMSPREE_ID);
    
    // Opcional: Mostrar mensaje de éxito si el formulario fue enviado
    if (state.succeeded) {
        return (
            // Contenido de éxito (como lo definimos antes)
            <section id="contact" className="py-20 px-4 min-h-[50vh] flex items-center bg-base-200 text-center">
                <div className="container mx-auto p-12 bg-base-100 rounded-2xl shadow-xl">
                    <h2 className="text-4xl font-bold text-secondary mb-4">
                        ¡Mensaje Recibido! 🎉
                    </h2>
                    <p className="text-xl text-base-content/80">
                        Gracias por contactar a Soluciones Andes. Nos pondremos en contacto contigo a la brevedad.
                    </p>
                    <a href="#hero" className="btn btn-primary mt-6">
                        Volver al Inicio
                    </a>
                </div>
            </section>
        );
    }
    
    // ... Datos de contacto fijos para el lateral (sin cambios)
    const contactInfo = [ /* ... */ ];

    return (
        <section id="contact" className="py-20 px-4 bg-base-200">
            <div className="container mx-auto">
                {/* ... Títulos ... */}
                
                <div className="flex flex-col lg:flex-row gap-12 bg-base-100 p-8 md:p-12 rounded-2xl shadow-2xl">
                    
                    <div className="lg:w-2/3">
                        <h3 className="text-2xl font-semibold mb-6 text-primary border-b pb-2 border-secondary/50">
                            Envíanos un Mensaje
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* ... Campos de Nombre, Email, Servicio ... */}
                            {/* Solo asegúrate de que los atributos 'name' sean correctos */}

                            {/* ... (Tu código de campos va aquí) ... */}
                            
                            {/* Ejemplo de validación para el Email (opcional, pero recomendado) */}
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-base-content">Tu Email</span>
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="ejemplo@correo.com" 
                                    className="input input-bordered w-full" 
                                    name="Email" 
                                    required 
                                />
                                <ValidationError 
                                    className="text-error text-sm mt-1"
                                    prefix="Email" 
                                    field="Email"
                                    errors={state.errors}
                                />
                            </div>

                            {/* Campo de Mensaje */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base-content">Mensaje / Requerimiento</span>
                                </label>
                                <textarea 
                                    className="textarea textarea-bordered h-24" 
                                    placeholder="Describe brevemente lo que necesitas..." 
                                    name="Mensaje">
                                </textarea>
                                <ValidationError 
                                    className="text-error text-sm mt-1"
                                    prefix="Mensaje" 
                                    field="Mensaje"
                                    errors={state.errors}
                                />
                            </div>

                            {/* Botón de Envío */}
                            <div className="form-control mt-6">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg shadow-lg text-primary-content"
                                    disabled={state.submitting} 
                                >
                                    {state.submitting ? 'Enviando...' : 'Enviar Solicitud'}
                                </button>
                                {/* Removimos el estado de error manual, ahora usamos ValidationError arriba */}
                            </div>
                        </form>
                    </div>

                    {/* ... Información de Contacto Lateral ... */}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;