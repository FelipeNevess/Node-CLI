import { IReadDTO } from './IReadDTO';

export interface IRead {
  read({ directory, filename }: IReadDTO): Promise<string | undefined>;
}
