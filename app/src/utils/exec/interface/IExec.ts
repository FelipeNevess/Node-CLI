import { IExecDTO } from './IExecDTO';

export interface IExecSync {
  exec({ commands }: IExecDTO): void;
}

export interface IExec {
  execute({ commands }: IExecDTO): void;
}
