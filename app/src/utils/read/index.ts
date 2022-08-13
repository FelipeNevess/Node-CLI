import { readFile } from 'fs/promises';
import { join } from 'path';

import { IRead, IReadDTO } from './interface';
import { AppError } from '../../errors';

class ReadFile implements IRead {
  async read({ directory, filename }: IReadDTO): Promise<string | undefined> {
    try {
      const data = await readFile(
        join(__dirname, directory.toLowerCase(), filename.toLowerCase()),
        'utf-8',
      );

      return data;
    } catch {
      if (typeof filename !== 'string') {
        throw new AppError('O arquivo deve ser do tipo string');
      } else if (typeof directory !== 'string') {
        throw new AppError('O diretório deve ser do tipo string');
      } else {
        throw new AppError('Erro de leitura, arquivo não encontrado!');
      }
    }
  }
}

export { ReadFile };
