import { Controller, render, Route, ViewResponse } from '@nucleonjs/core';

@Controller()
export class AppController {
  constructor() {}

  @Route.Get('/')
  public index(): ViewResponse {
    return render('home', {
      message: 'Hello world',
    });
  }
}
