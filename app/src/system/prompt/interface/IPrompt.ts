import { IPromptDTO } from './IPromptDTO';

export interface IPrompts {
  start(): Promise<IPromptDTO | void>;
}

export interface IPrompt {
  execute(): Promise<IPromptDTO | void>;
}
