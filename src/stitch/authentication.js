

import { app } from './app';

export function addAuthenticationListener(listener) {
    app.auth.addAuthListener(listener);
}

export function removeAuthenticationListener(listener) {
    app.auth.removeAuthListener(listener);
}

export function hasLoggedInUser() {
    return app.auth.isLoggedIn;
}

export function getCurrentUser() {
    return app.auth.isLoggedIn ? app.auth.user : null;
}

export function logoutCurrentUser() {
    const user = getCurrentUser()
    return app.auth.logoutUserWithId(user.id)
}