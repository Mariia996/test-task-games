import GamesService from './games-service';

import {
  gamesRequest,
  gamesSuccess,
  gamesError,
  categoriesRequest,
  categoriesSuccess,
  categoriesError,
  setGames,
} from './games-actions';

const gamesService = new GamesService();

export const getAllGames = () => async dispatch => {
  dispatch(gamesRequest());
  try {
    const data = await gamesService.getGames();
    dispatch(gamesSuccess(data));
  } catch (error) {
    dispatch(gamesError(error));
  }
};

export const getAllCategories = () => async dispatch => {
  dispatch(categoriesRequest());
  try {
    const data = await gamesService.getCategories();
    dispatch(categoriesSuccess(data));
  } catch (error) {
    dispatch(categoriesError(error));
  }
};

export const setFilteredGames = games => dispatch => {
  dispatch(setGames(games));
};
