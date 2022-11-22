import { execCommands, writeFile } from '../../utils';
import { IInProcessingDTO } from './interfaces';
import {
  whichJSON,
  editorconfig,
  prettierrc,
  vcCodeSettings,
  gitIgnore,
  readme,
  serverJav,
  serverTyp,
  tsconfig
} from './packages';

class Processig {
  constructor(private resultPrompt: IInProcessingDTO) {
    this.in_process();
  }

  private async in_process() {
    const { project, git, typing } = this.resultPrompt;

    await this.create_initial_structure({ project });
    await this.json({ project, json: new whichJSON(typing).return_json() });

    if (git) { await this.git({ project }); }

    this.is_type({ project, typing });
    this.finished({ project });
  }

  private async create_initial_structure({ project }: IInProcessingDTO) {
    execCommands.execute({
      commands: `
        mkdir ${project} &&
        cd ${project} &&
        mkdir src .vscode
      `
    });

    console.log('\nPROCESSANDO...');
    await this.initial_files({ project });
  }

  private async initial_files({ project }: IInProcessingDTO) {
    await writeFile.execute({
      directory_name: `${project}/.vscode`,
      filename: 'settings.json',
      text: '',
      formate: true,
      json: vcCodeSettings
    });

    await writeFile.execute({
      directory_name: project,
      filename: ['.editorconfig', '.prettierrc', 'readme.md'],
      text: [editorconfig, prettierrc, readme],
    });
  }

  private async git({ project }: IInProcessingDTO) {
    execCommands.execute({ commands: `cd ${project} && git init` });

    await writeFile.execute({
      filename: '.gitignore',
      text: gitIgnore,
      directory_name: project
    });
  }

  private async is_type({ project, typing }: IInProcessingDTO) {
    if (typing) {
      await writeFile.execute({
        directory_name: `${project}/src`,
        filename: 'server.ts',
        text: serverTyp,
      });

      await writeFile.execute({
        directory_name: `${project}`,
        filename: 'tsconfig.json',
        text: '',
        formate: true,
        json: tsconfig
      });

    } else {
      await writeFile.execute({
        directory_name: `${project}/src`,
        filename: 'server.js',
        text: serverJav,
      });
    }
  }

  private async json({ json, project }: IInProcessingDTO) {
    await writeFile.execute({
      directory_name: project,
      filename: 'package.json',
      text: '',
      formate: true,
      json
    });
  }

  private finished({ project }: IInProcessingDTO) {
    execCommands.execute({ commands: `cd ${project} && yarn` });
    console.log('\nFINALIZADO');
  }
}

export { Processig }
