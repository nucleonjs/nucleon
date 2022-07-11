import { Controller, Route } from '@nucleonjs/core';

@Controller()
export class AppController {
  @Route.get('/')
  public index(): string {
    return 'Hello World!';
  }
}
