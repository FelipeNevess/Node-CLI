import { readFile } from 'fs/promises';
import { join } from 'path';

import { IReadFilePromises, IReadDTO } from './interface';

class ReadFilePromises implements IReadFilePromises {
  async read({ directory, filename }: IReadDTO): Promise<string | undefined> {
    const data = await readFile(join(__dirname, directory, filename), 'utf-8');

    return data;
  }
}

export { ReadFilePromises };
