/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-reducer';
import gamesReducer from './games/games-reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    games: gamesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default { store };
