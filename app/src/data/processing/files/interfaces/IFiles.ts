import { IReadFilesDTO } from './IFilesDTO';

export interface IFiles {
  execute({ filename, text, project }: IReadFilesDTO): void;
}
