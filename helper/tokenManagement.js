import {redis} from '../redis/redis.js';

class TokenManagment {

  async saveToken(customerId, token) {
    await redis.client.set(customerId, token);
  };

  async getToken(customerId) {
    return redis.client.get(customerId);
  };
};

export const tokenManagment =  new TokenManagment();
