import { exeCommands, writeFile } from '../../utils';
import { Control } from './control';
import { IInProcessingDTO } from './interfaces';

class Processig {
  private _name: string;
  private _typing: boolean | undefined;
  private _git: string | boolean | undefined;
  private _orm: string | boolean | undefined;

  constructor(
    private resultPrompt: IInProcessingDTO,
    private initializers: Array<string> = ['json', 'code', 'initial', 'eslint'],
  ) {
    const { project, typing, git, orm } = this.resultPrompt;

    this._name = project.replace(/\s/g, '-');
    this._typing = typing;
    this._git = git;
    this._orm = orm;

    this.in_process();
  }

  private async in_process() {
    try {
      await this.create_structure({ project: this._name });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  }

  private async create_structure({ project }: IInProcessingDTO) {
    exeCommands.execute({
      commands: `
        mkdir ${project} &&
        cd ${project} &&
        mkdir src .vscode
      `,
    });

    if (this._git) {
      this.initializers.push('git');
      exeCommands.execute({
        commands: `cd ${this._name} && git init -q`,
      });
    }

    if (this._typing) this.initializers.push('with_typing');
    if (!this._typing) this.initializers.push('no_typing');

    await new Control(
      this._name,
      this._typing,
      this.initializers,
      this._orm ? this._orm : false,
      writeFile,
    ).exec({
      final_comands: exeCommands,
      initial_msg: '\n✏️ processando...',
      final_msg: `✅ processo finalizado!
        \n\n\n- Não deixe de ver o arquivo help.txt :)
        \n- - - - - - - - - - - - - - - - - - - -`,
    });
  }
}

export { Processig };
