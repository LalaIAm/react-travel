import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  hasLoggedInUser,
  logoutCurrentUser,
  getCurrentUser,
  addAuthenticationListener,
  removeAuthenticationListener,
} from '../../stitch';

const StitchAuthContext = createContext();

export function useStitchAuth() {
  const context = React.useContext(StitchAuthContext);

  if (!context) {
    throw new Error(`useStitchAuth must be used within a Stitch auth provider`);
  }

  return context;
}

export function StitchAuthProvider() {
  const [authState, setAuthState] = useState({
    isLoggedIn: hasLoggedInUser(),
    currentUser: getCurrentUser(),
  });

  const handleAnonymousLogin = async () => {
    const { isLoggedIn } = authState;
    if (!isLoggedIn) {
      const loggedInUser = await loginAnonymous();
      setAuthState({
        ...authState,
        isLoggedIn: true,
        currentUser: loggedInUser,
      });
    }
  };
  const handleLogout = async () => {
    const { isLoggedIn } = authState;
    if (isLoggedIn) {
      await logoutCurrentUser();
      setAuthState({
        isLoggedIn: false,
        currentUser: null,
      });
    } else {
      console.log('Must be logged in to log out.');
    }
  };

  const authInfo = React.useMemo(() => {
    const { isLoggedIn, currentUser } = authState;
    const value = {
      isLoggedIn,
      currentUser,
      actions: { handleAnonymousLogin, handleLogout },
    };
    return value;
  }, [authState.isLoggedIn]);
  return (
    <StitchAuthContext.Provider value={authInfo}>
      {props.children}
    </StitchAuthContext.Provider>
  );
}

StitchAuthProvider.propTypes = {
  children: PropTypes.element,
};
