import { Prompt } from './data/prompt';
import { IQuestions } from './data/prompt/interface';
import { IAppPrompt } from './interface/IAppPrompt';

class App implements IAppPrompt {
  constructor(private prompt: Prompt) {}

  async getStarted(): Promise<IQuestions> {
    // console.log(await this.prompt.start());

    return await this.prompt.start();
  }
}

export { App };
