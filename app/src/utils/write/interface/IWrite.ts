import { IWriteDTO } from './IWriteDTO';

export interface IWrite {
  write({ filename, text }: IWriteDTO): Promise<void | undefined>;
}
