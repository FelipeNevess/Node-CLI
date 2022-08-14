import clear from 'clear';

import { Prompt, Prompts } from './data/prompt';
import { IInitialize } from './interfaces';
import { terminalDecoration } from './utils';

class Initialize implements IInitialize {
  start(): void {
    clear();
    terminalDecoration.decorate('Node CLI');

    const prompt = new Prompts();
    new Prompt(prompt).execute();
  }
}

export { Initialize };
