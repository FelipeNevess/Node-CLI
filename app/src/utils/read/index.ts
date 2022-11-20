import { Check } from '../check';
import { IReadDTO, IReadFile, IReadFilePromises } from './interface';

class ReadFile implements IReadFile {
  constructor(private readFile: IReadFilePromises, private check: Check) { }

  async execute({
    directory,
    filename,
  }: IReadDTO): Promise<string | undefined> {
    try {
      const response = await this.readFile.read({
        directory,
        filename,
      });

      return response;
    } catch {
      this.check.checkRead({
        filename,
        directory,
      });
    }
  }
}

export { ReadFile };
