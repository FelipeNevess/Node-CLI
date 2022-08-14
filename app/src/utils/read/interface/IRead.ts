import { IReadDTO } from './IReadDTO';

export interface IReadFilePromises {
  read({ directory, filename }: IReadDTO): Promise<string | undefined>;
}

export interface IReadFile {
  execute({ directory, filename }: IReadDTO): Promise<string | undefined>;
}
