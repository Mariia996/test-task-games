import axios from 'axios';

class BaseHttpService {
  BASE_URL = 'http://localhost:3001';

  player = null;

  async get(endpoint = '', options = {}) {
    Object.assign(options, this.getCommonOptions());
    try {
      const { data } = await axios.get(`${this.BASE_URL}/${endpoint}`, options);
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(endpoint = '', body, options = {}) {
    Object.assign(options, this.getCommonOptions());
    try {
      const { data } = await axios.post(
        `${this.BASE_URL}/${endpoint}`,
        body,
        options,
      );
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async patch(endpoint = '', body, options = {}) {
    Object.assign(options, this.getCommonOptions());
    try {
      const { data } = await axios.patch(
        `${this.BASE_URL}/${endpoint}`,
        body,
        options,
      );
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    const { statusCode } = error.response.data;
    if (statusCode !== 401) {
      throw error;
    } else {
      return this.handle401();
    }
  }

  handle401() {
    this.isAuthenticated = false;
    this.removeIsAuthenticated();
  }

  getCommonOptions() {
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }
  getPlayer() {
    return this.player || this.loadPlayer();
  }

  savePlayer(value) {
    this.player = value;
    localStorage.setItem('player', JSON.stringify(value));
    return value;
  }

  loadPlayer() {
    const player = JSON.parse(localStorage.getItem('player'));
    this.player = player;
    return player;
  }

  removePlayer() {
    localStorage.removeItem('player');
    this.player = null;
  }
}

export default BaseHttpService;
