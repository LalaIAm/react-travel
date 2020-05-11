import React from 'react';

import LandingPage from './Views/Landing';
import { StitchAuthProvider, useStitchAuth } from './components/auth/StitchAuth';
import AppRoutes from './components/auth/Routing';



const App = () => (
    <AppUI />
  
)

const AppUI = () => {
 
  return (
    <div className='App'>
       <LandingPage />
    </div>
  )
}

export default App;