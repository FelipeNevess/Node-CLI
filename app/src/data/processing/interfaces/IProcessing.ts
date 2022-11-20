import { IExecDTO } from '../../../utils/exec/interface';

export interface IProcessing {
  processingCommands({ commands }: IExecDTO): void;
  // processingFiles(): void;
}
