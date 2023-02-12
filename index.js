import express from 'express';
import { environment } from './environment.js';
import swaggerUiExpress from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();

const swaggerDocument = YAML.load("./docs/openapi.yml");

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));

app.listen(environment.appPort, () => {
  console.log(`BMS is running on ${environment.appPort}`);
})
