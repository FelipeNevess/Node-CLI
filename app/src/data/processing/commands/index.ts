import { ICommands } from './interfaces';
import { IExecDTO, IExec } from '../../../utils/exec/interface';

class Commands implements ICommands {
  constructor(private execCommands: IExec) {}

  execute({ commands }: IExecDTO): void {
    this.execCommands.execute({
      commands,
    });
  }
}

export { Commands };
