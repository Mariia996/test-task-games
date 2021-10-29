import AuthService from './auth-service';

import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const authService = new AuthService();

export const logIn = body => async dispatch => {
  dispatch(loginRequest());
  try {
    const data = await authService.login(body);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const logOut = body => async dispatch => {
  dispatch(logoutRequest());
  try {
    await authService.logout(body);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

export const getCurrentUser = () => async dispatch => {
  dispatch(getCurrentUserRequest());
  try {
    const data = await authService.currentUser();
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
  }
};
