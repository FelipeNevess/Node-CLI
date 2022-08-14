import { AppError } from '../../errors';
import { ICheckDTO } from './interface';

class Check {
  checkCommands({ commands, err }: ICheckDTO) {
    const typeCommand = this.typeOf(commands);
    const message = this.instanceOfError({ err });

    if (typeCommand !== 'string' && typeCommand !== 'object') {
      throw new AppError(`Tipo ${typeCommand} inválido`);
    } else if (message.includes('not found')) {
      throw new AppError('Este comando não existe');
    } else {
      throw new AppError('O (diretorio/arquivo) já existe');
    }
  }

  checkRead({ filename, directory }: ICheckDTO) {
    this.readWrite({
      filename,
      directory,
    });
  }

  checkWrite({ filename, text }: ICheckDTO) {
    this.readWrite({
      filename,
      text,
    });
  }

  private readWrite({ filename, text, directory }: ICheckDTO) {
    if (text) {
      if (this.typeOf(text) !== 'string') {
        throw new AppError('O texto deve ser do tipo string');
      }
    }

    if (directory) {
      if (this.typeOf(directory) !== 'string') {
        throw new AppError('O diretório deve ser do tipo string');
      }
    }

    if (this.typeOf(filename) !== 'string') {
      throw new AppError('O arquivo deve ser do tipo string');
    } else {
      throw new AppError('Erro de leitura, arquivo não encontrado!');
    }
  }

  private typeOf<T>(value: T) {
    return typeof value;
  }

  private instanceOfError({ err }: ICheckDTO) {
    let errorMessage = '';

    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return errorMessage;
  }
}

export { Check };
