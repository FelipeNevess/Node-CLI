import { IWriteDTO } from './IWriteDTO';

export interface IWritePromises {
  write({ filename, text }: IWriteDTO): Promise<void | undefined>;
}

export interface IWriteFile {
  execute({ filename, text }: IWriteDTO): Promise<void | undefined>;
}
