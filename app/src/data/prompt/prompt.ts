import { prompt } from 'prompts';

import { IPrompt, IQuestions } from './interface';
import { questions } from './questions';

class Prompt implements IPrompt {
  async start(): Promise<IQuestions> {
    const response: IQuestions = await prompt(questions);

    return response;
  }
}

export { Prompt };
