import React from 'react';

import LandingPage from './Views/Landing.js';
import { StitchAuthProvider, useStitchAuth } from './components/auth/StitchAuth';
import AppRoutes from './components/auth/Routing';



const App = () => (
  <StitchAuthProvider>
    <AppUI />
  </StitchAuthProvider>
)

const AppUI = () => {
  const {
    isLoggedIn
  } = useStitchAuth();
  return (
    <div className='App'>
      {isLoggedIn ? <AppRoutes /> : <LandingPage />}
    </div>
  )
}

export default App;