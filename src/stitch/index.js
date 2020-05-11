import { app } from './app';
import { trips } from './db';
import {
  logoutCurrentUser,
  addAuthenticationListener,
  removeAuthenticationListener,
  hasLoggedInUser,
  getCurrentUser,
} from './authentication';

export {
  logoutCurrentUser,
  addAuthenticationListener,
  removeAuthenticationListener,
  hasLoggedInUser,
  getCurrentUser,
  app,
  trips,
};
