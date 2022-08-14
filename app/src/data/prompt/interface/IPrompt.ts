import { IPromptDTO } from './IPromptDTO';

export interface IPrompts {
  start(): Promise<IPromptDTO>;
}

export interface IPrompt {
  execute(): Promise<IPromptDTO>;
}
