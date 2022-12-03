import { IWriteFile, IWriteFilePromises } from './interface/IWrite';
import { Check } from '../check';
import { IWriteFiles } from './interface';

class WriteFile implements IWriteFile {
  constructor(private writeFile: IWriteFilePromises, private check: Check) {}

  async execute({
    filename,
    text,
    directory_name,
    formate,
    json,
  }: IWriteFiles): Promise<void | undefined> {
    try {
      if (typeof filename === 'object') {
        filename.forEach(async (file, i) => {
          await this.writeFile.write({
            filename: file,
            text: text[i],
            directory_name:
              typeof directory_name === 'object'
                ? directory_name[i]
                : directory_name,
            formate,
            json:
              typeof json === 'object' ? json[i as keyof typeof json] : json,
          });
        });
      } else {
        await this.writeFile.write({
          filename,
          text,
          directory_name,
          formate,
          json,
        });
      }
    } catch {
      this.check.checkWrite({
        filename,
        text,
      });
    }
  }
}

export { WriteFile };
