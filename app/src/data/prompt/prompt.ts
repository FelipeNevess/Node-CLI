import { prompt } from 'prompts';

import { IPrompts, IPromptDTO } from './interface';
import { questions } from './questions';

class Prompts implements IPrompts {
  async start(): Promise<IPromptDTO> {
    const response = await prompt(questions);

    return response;
  }
}

export { Prompts };
