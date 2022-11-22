import { execSync } from 'child_process';

import { IExecSync, IExecDTO } from './interface';

class ExecSync implements IExecSync {
  exec({ commands }: IExecDTO): void {
    if (typeof commands === 'object') {
      this.execObj({ commands });
    } else {
      execSync(commands);
    }
  }

  private execObj({ commands }: IExecDTO): void {
    const commandsArray = commands as Array<string>;

    commandsArray.forEach((element) => execSync(element));
  }
}

export { ExecSync };
