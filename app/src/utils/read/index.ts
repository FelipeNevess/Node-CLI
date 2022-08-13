import { AppError } from '../../errors';
import { IReadDTO, IReadFile } from './interface';
import { ReadFilePromises } from './read';

class ReadFile implements IReadFile {
  constructor(private readFile: ReadFilePromises) {}

  async execute({
    directory,
    filename,
  }: IReadDTO): Promise<string | undefined> {
    try {
      const response = await this.readFile.read({
        directory,
        filename,
      });

      return response;
    } catch {
      if (typeof filename !== 'string') {
        throw new AppError('O arquivo deve ser do tipo string');
      } else if (typeof directory !== 'string') {
        throw new AppError('O diretório deve ser do tipo string');
      } else {
        throw new AppError('Erro de leitura, arquivo não encontrado!');
      }
    }
  }
}

export { ReadFile };
