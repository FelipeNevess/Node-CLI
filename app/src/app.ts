import { IAppPrompt, IInitialize } from './interfaces';

class App implements IAppPrompt {
  constructor(private initialize: IInitialize) {}

  getStarted(): void {
    this.initialize.init();
  }
}

export { App };
