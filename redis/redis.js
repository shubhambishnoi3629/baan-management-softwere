import { createClient } from 'redis';
import { environment } from '../environment.js';

class Redis {
  client;

  init() {
    this.client = createClient(environment.redisPort, environment.redisUrl);
    
    this.client.on('connect', function() {
      console.log('Redis Connected!');
    });

    this.client.connect();
  }
}

export const redis = new Redis();
