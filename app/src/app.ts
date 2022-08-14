import { Prompt } from './data/prompt';
import { IPromptDTO } from './data/prompt/interface';
import { IAppPrompt } from './interface/IAppPrompt';

class App implements IAppPrompt {
  constructor(private prompt: Prompt) {}

  async getStarted(): Promise<IPromptDTO> {
    const response = await this.prompt.start();

    // console.log(response)

    return response;
  }
}

export { App };
