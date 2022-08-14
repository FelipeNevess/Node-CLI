import { IPrompt, IPromptDTO } from './interface';
import { Prompts } from './prompt';

class Prompt implements IPrompt {
  constructor(private prompt: Prompts) {}

  execute(): Promise<IPromptDTO> {
    const response = this.prompt.start();

    return response;
  }
}

export { Prompt, Prompts };
