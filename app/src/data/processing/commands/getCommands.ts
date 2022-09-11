import { ICommandsProcessing, ICommandsProcessingDTO } from './interfaces';

import { bash, gitCommand } from '../../commands';
import { tsNode } from '../../commands';

class GetCommands implements ICommandsProcessing {
  execute({ git, typing }: ICommandsProcessingDTO): string {
    const responseGit = this.useGit(git);
    const responseTypescript = this.useTypescript(typing);

    return `${responseGit} ${responseTypescript}`;
  }

  private useGit(git: boolean): string {
    const result = !git ? bash : `${bash} && ${gitCommand}`;

    return result;
  }

  private useTypescript(typescript: boolean): string {
    const response = typescript ? tsNode : '';

    return response;
  }
}

export { GetCommands };
