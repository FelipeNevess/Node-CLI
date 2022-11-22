import { writeFile } from 'fs/promises';
import { join } from 'path';
import { IWriteFilePromises } from './interface/IWrite';

import { IWriteDTO } from './interface/IWriteDTO';

class WriteFilePromises implements IWriteFilePromises {
  async write({ directory_name, filename, text, formate, json }: IWriteDTO): Promise<void | undefined> {
    await writeFile(
      join(directory_name as string, filename),
      formate ? JSON.stringify(json, null, 2) : text as string,
      { flag: 'w', }
    );
  }
}

export { WriteFilePromises };
