import Dotenv from 'dotenv';

Dotenv.config();

export const environment = {
  appName: process.env.APP_NAME,
  appPort: process.env.APP_PORT,
  dbUrl: process.env.DB_URL,
  jwtSecret: process.env.JWT_SECRET,
}
