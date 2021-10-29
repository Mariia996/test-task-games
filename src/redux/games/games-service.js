import BaseHttpService from '../../shared/service/base-http-service';

class GamesService extends BaseHttpService {
  async getGames() {
    try {
      const games = await this.get('games');
      return games;
    } catch (error) {
      throw error;
    }
  }

  async getCategories() {
    try {
      const categories = await this.get('categories');
      return categories;
    } catch (error) {
      throw error;
    }
  }
}

export default GamesService;
