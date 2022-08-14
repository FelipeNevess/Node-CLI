import { ExecSync } from './exec';
import { IExec, IExecDTO } from './interface';
import { Check } from '../check';

class ExecCommands implements IExec {
  constructor(private execDommands: ExecSync, private check: Check) {}

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
