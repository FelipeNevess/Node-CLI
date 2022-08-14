import { IWriteFile } from './interface/IWrite';
import { WriteFilePromises } from './write';
import { IWriteDTO } from './interface/IWriteDTO';
import { Check } from '../check';

class WriteFile implements IWriteFile {
  constructor(private writeFile: WriteFilePromises, private check: Check) {}

  async execute({ filename, text }: IWriteDTO): Promise<void | undefined> {
    try {
      await this.writeFile.write({
        filename,
        text,
      });
    } catch {
      this.check.checkWrite({
        filename,
        text,
      });
    }
  }
}

export { WriteFile };
