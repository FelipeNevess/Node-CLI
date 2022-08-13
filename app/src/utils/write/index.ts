import { AppError } from '../../errors';
import { IWriteFile } from './interface/IWrite';
import { WriteFilePromises } from './write';
import { IWriteDTO } from './interface/IWriteDTO';

class WriteFile implements IWriteFile {
  constructor(private writeFile: WriteFilePromises) {}

  async execute({ filename, text }: IWriteDTO): Promise<void | undefined> {
    try {
      await this.writeFile.write({
        filename,
        text,
      });
    } catch (err) {
      if (typeof filename !== 'string') {
        throw new AppError('O arquivo deve ser do tipo string');
      } else if (typeof text !== 'string') {
        throw new AppError('O texto deve ser do tipo string');
      } else {
        throw new AppError(`Erro de escrita! ${err}`);
      }
    }
  }
}

export { WriteFile };
