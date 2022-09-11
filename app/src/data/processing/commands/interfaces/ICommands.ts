import { IExecDTO } from '../../../../utils/exec/interface';

export interface ICommands {
  execute({ commands }: IExecDTO): void;
}
