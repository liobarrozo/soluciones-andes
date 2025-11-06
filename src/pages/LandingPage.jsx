// src/pages/LandingPage.jsx

import React from 'react';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSections';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';



const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
        </>
    );
};

export default LandingPage;