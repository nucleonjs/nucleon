import { Controller, Route } from '@nucleonjs/core';

@Controller()
export class AppController {
  @Route.Get('/')
  public index(): string {
    return 'Hello World!';
  }
}
