import { Prompt, Prompts } from './data/prompt';
import { IInitialize } from './interfaces';

class Initialize implements IInitialize {
  start(): void {
    const prompt = new Prompts();
    new Prompt(prompt).execute();
  }
}

export { Initialize };
