import { IWriteFile } from '../../utils/write/interface';
import { IData, IUseful } from './interfaces';
import {
  editorconfig,
  eslintConfig,
  gitIgnore,
  prettierrc,
  readme,
  serverJav,
  serverTyp,
  tsconfig,
  vcCodeSettings,
  whichJSON,
} from './packages';

class Control {
  private eslintConf = new eslintConfig(this.typing);
  private initial_data: IData = {
    directory_name: this.project,
    filename: '',
    text: '',
    formate: false,
    json: {},
  };
  private data = {
    git: {
      ...this.initial_data,
      filename: '.gitignore',
      text: gitIgnore,
    },
    code: {
      ...this.initial_data,
      directory_name: `${this.project}/.vscode`,
      filename: 'settings.json',
      formate: true,
      json: vcCodeSettings,
    },
    initial: {
      ...this.initial_data,
      filename: ['.editorconfig', '.prettierrc.js', 'readme.md'],
      text: [editorconfig, prettierrc, readme],
    },
    json: {
      ...this.initial_data,
      filename: 'package.json',
      formate: true,
      json: new whichJSON(this.typing).json,
    },
    eslint: {
      ...this.initial_data,
      filename: ['.eslintrc.js', '.eslintignore'],
      text: [this.eslintConf.configJs, this.eslintConf.ignore],
    },
    with_typing: {
      directory_name: [`${this.project}/src`, this.project],
      filename: ['server.ts', 'tsconfig.json'],
      text: [serverTyp, ''],
      formate: [false, true],
      json: [{}, tsconfig],
    },
    no_typing: {
      directory_name: `${this.project}/src`,
      filename: 'server.js',
      text: serverJav,
    },
  };

  constructor(
    private project: string,
    private typing: boolean | undefined,
    private infos: Array<string>,
    private process: IWriteFile,
  ) {}

  async exec({ initial_msg, final_msg, final_comands }: IUseful) {
    await Promise.all(
      this.infos.map(
        async (item) =>
          await this.process.execute(this.data[item as keyof object]),
      ),
    );

    console.log(initial_msg);

    final_comands?.execute({
      commands: `cd ${this.project} && yarn`,
    });

    console.log(final_msg);
  }
}

export { Control };
