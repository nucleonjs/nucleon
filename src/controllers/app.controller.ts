import { Controller, render, Route, ViewResponse } from '@nucleonjs/core';

@Controller()
export class AppController {
  @Route.Get('/')
  public index(): ViewResponse {
    return render('pages/home');
  }
}
