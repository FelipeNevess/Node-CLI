import { IExec, IExecDTO, IExecSync } from './interface';
import { Check } from '../check';

class ExeCommands implements IExec {
  constructor(private exeCommands: IExecSync, private check: Check) {}

  execute({ commands }: IExecDTO): void {
    try {
      this.exeCommands.exec({ commands });
    } catch (err) {
      this.check.checkCommands({
        commands,
        err: err as Error,
      });
    }
  }
}

export { ExeCommands };
