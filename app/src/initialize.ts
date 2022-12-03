import clear from 'clear';

import { IInitialize } from './interfaces';
import { terminalDecoration } from './utils';
import { Prompt, Prompts, Processig } from './system';

class Initialize implements IInitialize {
  async start(): Promise<void> {
    this.terminal();

    const prompt = new Prompts();
    const response = await new Prompt(prompt).execute();

    if (response) {
      new Processig(response);
    }
  }

  private terminal() {
    clear();
    terminalDecoration.decorate('Node CLI');
  }
}

export { Initialize };
