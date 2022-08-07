import { IQuestions } from './IQuestions';

export interface IPrompt {
  start(): Promise<IQuestions>;
}
