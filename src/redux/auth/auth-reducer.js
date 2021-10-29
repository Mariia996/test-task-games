import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './auth-actions';

const initialStateUser = {
  username: '',
  name: '',
  avatar: '',
  event: '',
};

const initialStateIsAuthenticated = false;

const initialStateError = null;

const user = createReducer(initialStateUser, {
  [actions.loginSuccess]: (_, { payload }) => ({ ...payload }),
  [actions.logoutSuccess]: () => initialStateUser,
  [actions.getCurrentUserSuccess]: (_, { payload }) => ({ ...payload }),
});

const isAuthenticated = createReducer(initialStateIsAuthenticated, {
  [actions.loginSuccess]: () => true,
  [actions.getCurrentUserSuccess]: (_, { payload }) =>
    !!payload ? true : false,
  [actions.logoutSuccess]: () => initialStateIsAuthenticated,
});

const loading = createReducer(false, {
  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,
  [actions.logoutRequest]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.logoutError]: () => false,
  [actions.getCurrentUserRequest]: () => true,
  [actions.getCurrentUserSuccess]: () => false,
  [actions.getCurrentUserError]: () => false,
});

const error = createReducer(initialStateError, {
  [actions.loginError]: (_, { payload }) => payload,
  [actions.loginSuccess]: () => initialStateError,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => initialStateError,
  [actions.getCurrentUserError]: () => initialStateError,
  [actions.getCurrentUserSuccess]: () => initialStateError,
});

export default combineReducers({
  user,
  isAuthenticated,
  error,
  loading,
});
