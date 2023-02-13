import express from 'express';
import { environment } from './environment.js';
import swaggerUiExpress from 'swagger-ui-express';
import YAML from 'yamljs';
import { appRouter } from './routers/index.js';
import bodyParser from 'body-parser';
import { database } from './database/db.js';
import cors from 'cors';
import fs from 'fs'

const app = express();

app.use(bodyParser.json());

app.use(cors());

database.init();

const swaggerDocument = YAML.load("./docs/openapi.yml");

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));
app.use('/api', appRouter);

app.use('/assets', express.static('./fe',{root:fs.realpathSync('.')}));
app.use('/', (req, res) => {
  res.sendFile('./fe/index.html',{root:fs.realpathSync('.')});
});
app.listen(environment.appPort, () => {
  console.log(`BMS is running on ${environment.appPort}`);
})
