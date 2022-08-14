import { prompt } from 'prompts';

import { IPrompt, IPromptDTO } from './interface';
import { questions } from './questions';

class Prompt implements IPrompt {
  async start(): Promise<IPromptDTO> {
    const response = await prompt(questions);

    return response;
  }
}

export { Prompt };
