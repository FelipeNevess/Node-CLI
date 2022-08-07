import { IQuestions } from '../data/prompt/interface';

export interface IAppPrompt {
  getStarted(): Promise<IQuestions>;
}
