import React from 'react';
import { FormspreeProvider } from '@formspree/react';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage'; 

const FORMSPREE_ENDPOINT = "mpwovawa";

function App() {
  return (
    <FormspreeProvider project={FORMSPREE_ENDPOINT}> 
        <MainLayout>
          <LandingPage /> 
        </MainLayout>
    </FormspreeProvider>
  );
}

export default App;