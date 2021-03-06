import { createAction } from '@reduxjs/toolkit';

export const gamesRequest = createAction('games/gamesRequest');
export const gamesSuccess = createAction('games/gamesSuccess');
export const gamesError = createAction('games/gamesError');

export const categoriesRequest = createAction('categories/categoriesRequest');
export const categoriesSuccess = createAction('categories/categoriesSuccess');
export const categoriesError = createAction('categories/categoriesError');

export const setGames = createAction('games/setGames');

const actions = {
  gamesRequest,
  gamesSuccess,
  gamesError,
  categoriesRequest,
  categoriesSuccess,
  categoriesError,
  setGames,
};

export default actions;
