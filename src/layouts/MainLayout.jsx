// src/layouts/MainLayout.jsx
import React from 'react';
import Header from './Header';
// import Footer from './Footer'; 

const MainLayout = ({ children }) => {
    return (
        <div data-theme="soluciones-andes" className="min-h-screen bg-base-100">
            <Header />
            <main>
                {children} 
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;