import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  gamesRequest,
  gamesSuccess,
  gamesError,
  categoriesRequest,
  categoriesSuccess,
  categoriesError,
  setGames,
} from './games-actions';

const initialStateGames = [];

const initialStateCategories = [];

const initialStateFilteredGames = [];

const initialStateError = null;

const games = createReducer(initialStateGames, {
  [gamesSuccess]: (_, { payload }) => payload,
});

const filteredGames = createReducer(initialStateFilteredGames, {
  [gamesSuccess]: (_, { payload }) => payload,
  [setGames]: (_, { payload }) => payload,
});

const categories = createReducer(initialStateCategories, {
  [categoriesSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [gamesRequest]: () => true,
  [gamesSuccess]: () => false,
  [gamesError]: () => false,
  [categoriesRequest]: () => true,
  [categoriesSuccess]: () => false,
  [categoriesError]: () => false,
});

const error = createReducer(initialStateError, {
  [gamesError]: (_, { payload }) => payload,
  [gamesSuccess]: () => initialStateError,
  [categoriesError]: (_, { payload }) => payload,
  [categoriesSuccess]: () => initialStateError,
});

export default combineReducers({
  games,
  filteredGames,
  categories,
  error,
  loading,
});
