import { IWriteFile } from '../../../utils/write/interface';
import { IFiles, IReadFilesDTO } from './interfaces';

class Files implements IFiles {
  constructor(private writeFiles: IWriteFile) {}

  async execute({ text, filename, project }: IReadFilesDTO): Promise<void> {
    this.writeFiles.execute({
      filename: `${project}/.gitignore`,
      text,
    });
  }
}

export { Files };
