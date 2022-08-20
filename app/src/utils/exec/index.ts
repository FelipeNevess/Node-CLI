import { IExec, IExecDTO, IExecSync } from './interface';
import { Check } from '../check';

class ExecCommands implements IExec {
  constructor(private execDommands: IExecSync, private check: Check) {}

  execute({ commands }: IExecDTO): void {
    try {
      this.execDommands.exec({ commands });
    } catch (err) {
      this.check.checkCommands({
        commands,
        err: err as Error,
      });
    }
  }
}

export { ExecCommands };
