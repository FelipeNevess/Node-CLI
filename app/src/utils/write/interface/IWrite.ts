import { IWriteDTO } from './IWriteDTO';
import { IWriteFiles } from './IWriteFile';

export interface IWriteFilePromises {
  write({ filename, text }: IWriteDTO): Promise<void | undefined>;
}

export interface IWriteFile {
  execute({ filename, text, directory_name }: IWriteFiles): Promise<void | undefined>;
}
