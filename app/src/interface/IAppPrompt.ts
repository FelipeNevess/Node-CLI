import { IPromptDTO } from '../data/prompt/interface';

export interface IAppPrompt {
  getStarted(): Promise<IPromptDTO>;
}
