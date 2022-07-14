import { AppController } from './controllers/app.controller';
import { createServer } from '@nucleonjs/core';

const server = createServer({
  controllers: [
    AppController,
  ],
  channels: [],
});

server.start();
