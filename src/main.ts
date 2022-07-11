import { createServer } from '@nucleonjs/core';
import { AppController } from './controllers/app.controller';

const server = createServer({
  controllers: [
    AppController,
  ],
});

server.start();
