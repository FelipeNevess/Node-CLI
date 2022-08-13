import { AppError } from '../../errors';
import { ExecSync } from './exec';
import { IExec, IExecDTO } from './interface';

class ExecCommands implements IExec {
  constructor(private execDommands: ExecSync) {}

  execute({ commands }: IExecDTO): void {
    try {
      this.execDommands.exec({ commands });
    } catch (err) {
      let errorMessage = '';

      if (err instanceof Error) {
        errorMessage = err.message;
      }

      if (typeof commands !== 'string' && typeof commands !== 'object') {
        throw new AppError(`Tipo ${typeof commands} inválido`);
      } else if (errorMessage.includes('not found')) {
        throw new AppError('Este comando não existe');
      } else {
        throw new AppError('O (diretorio/arquivo) já existe');
      }
    }
  }
}

export { ExecCommands };
