import { Initialize } from './initialize';
import { IAppPrompt } from './interfaces';

class App implements IAppPrompt {
  constructor(private initialize: Initialize) {}

  getStarted(): void {
    this.initialize.start();
  }
}

export { App };
