import { Check } from '../check';
import { IReadDTO, IReadFile } from './interface';
import { ReadFilePromises } from './read';

class ReadFile implements IReadFile {
  constructor(private readFile: ReadFilePromises, private check: Check) {}

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
