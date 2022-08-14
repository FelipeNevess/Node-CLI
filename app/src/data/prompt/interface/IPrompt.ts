import { IPromptDTO } from './IPromptDTO';

export interface IPrompt {
  start(): Promise<IPromptDTO>;
}
