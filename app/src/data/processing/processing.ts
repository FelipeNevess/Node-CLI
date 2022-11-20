import { IExecDTO } from '../../utils/exec/interface';
import { ICommands } from './commands/interfaces';
import { IFiles, IReadFilesDTO } from './files/interfaces';
import { IProcessing } from './interfaces';

class Processig implements IProcessing {
  constructor(private commands: ICommands, private files: IFiles) { }

  processingCommands({ commands }: IExecDTO): void {
    this.commands.execute({
      commands,
    });
  }

  processingFiles({ text, filename, project }: IReadFilesDTO): void {
    this.files.execute({
      text,
      filename,
      project,
    });
  }
}

export { Processig };
