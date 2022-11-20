import { IFilesDTO } from './IFilesProcessingDTO';

export interface IGetFiles {
  execute({ git, typing }: IFilesDTO): void;
}
