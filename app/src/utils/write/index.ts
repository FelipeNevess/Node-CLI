import { writeFile } from 'fs/promises';
import { join } from 'path';

import { IWrite } from './interface/IWrite';
import { IWriteDTO } from './interface/IWriteDTO';

import { AppError } from '../../errors';

class WriteFile implements IWrite {
  async write({ filename, text }: IWriteDTO): Promise<void | undefined> {
    try {
      await writeFile(join(__dirname, filename.toLowerCase()), text, {
        flag: 'w',
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
