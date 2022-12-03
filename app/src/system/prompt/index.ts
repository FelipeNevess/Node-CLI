import { IPrompt, IPromptDTO, IPrompts } from './interface';
import { Prompts } from './prompt';

import readline from 'readline';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

class Prompt implements IPrompt {
  constructor(private prompt: IPrompts) {}

  async execute(): Promise<IPromptDTO | void> {
    this.interrupt_process();

    const response = await this.prompt.start();
    return response;
  }

  private interrupt_process() {
    process.stdin.on('keypress', (_str, key) => {
      if (key.ctrl && key.name === 'c') {
        console.log('\n\nProcesso finalizado!');
        process.exit();
      }
    });
  }
}

export { Prompt, Prompts };
