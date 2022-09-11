import { ICommandsProcessingDTO } from './ICommandsProcessingDTO';

export interface ICommandsProcessing {
  execute({ git, typing }: ICommandsProcessingDTO): string;
}
