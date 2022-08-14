import { writeFile } from 'fs/promises';
import { join } from 'path';
import { IWritePromises } from './interface/IWrite';

import { IWriteDTO } from './interface/IWriteDTO';

class WriteFilePromises implements IWritePromises {
  async write({ filename, text }: IWriteDTO): Promise<void | undefined> {
    await writeFile(join(__dirname, filename.toLowerCase()), text, {
      flag: 'w',
    });
  }
}

export { WriteFilePromises };
