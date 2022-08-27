import { IPrompt, IPromptDTO, IPrompts } from './interface';
import { Prompts } from './prompt';

class Prompt implements IPrompt {
  constructor(private prompt: IPrompts) {}

  execute(): Promise<IPromptDTO> {
    const response = this.prompt.start();

    return response;
  }
}

export { Prompt, Prompts };
