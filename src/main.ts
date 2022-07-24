import { AppController } from './controllers/app.controller';
import { createServer } from '@nucleonjs/core';
import { PrismaClient as DatabaseClient } from '@prisma/client';

const server = createServer<DatabaseClient>({
  databaseClient: DatabaseClient,
  controllers: [
    AppController,
  ],
  channels: [],
});

await server.start();
