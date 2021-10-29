import BaseHttpService from '../../shared/service/base-http-service';

class AuthService extends BaseHttpService {
  async login(body) {
    try {
      const { player } = await this.post('login', body);
      this.savePlayer({ ...player, username: body.username });
      return { ...player, username: body.username };
    } catch (error) {
      throw error;
    }
  }

  async logout(body) {
    try {
      await this.post('logout', body);
      this.removePlayer();
    } catch (error) {
      throw error;
    }
  }

  async currentUser() {
    try {
      const player = await this.getPlayer();
      return player;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
