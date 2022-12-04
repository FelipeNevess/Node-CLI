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
  tsconfig,
  eslintConfig,
} from './packages';

class Processig {
  constructor(private resultPrompt: IInProcessingDTO) {
    this.in_process();
  }

  private async in_process() {
    const { project, git, typing } = this.resultPrompt;
    const nameProject = project.replace(/\s/g, '-');

    try {
      await this.create_initial_structure({ project: nameProject, typing });
      await this.json({
        project: nameProject,
        json: new whichJSON(typing).json,
      });

      if (git) {
        await this.git({ project: nameProject });
      }

      this.is_type({ project: nameProject, typing });
      this.finished({ project: nameProject });
    } catch (err) {
      if (err instanceof Error) {
        if (!err.message.includes('O (diretorio/arquivo) já existe')) {
          execCommands.execute({ commands: `rm -rf ${nameProject}` });
        }
        console.error(err.message);
      }
    }
  }

  private async create_initial_structure({
    project,
    typing,
  }: IInProcessingDTO) {
    execCommands.execute({
      commands: `
        mkdir ${project} &&
        cd ${project} &&
        mkdir src .vscode
      `,
    });

    console.log('\nPROCESSANDO...');
    await this.initial_files({ project, typing });
  }

  private async initial_files({ project, typing }: IInProcessingDTO) {
    await writeFile.execute({
      directory_name: `${project}/.vscode`,
      filename: 'settings.json',
      text: '',
      formate: true,
      json: vcCodeSettings,
    });

    await writeFile.execute({
      directory_name: project,
      filename: ['.editorconfig', '.prettierrc.js', 'readme.md'],
      text: [editorconfig, prettierrc, readme],
    });

    await this.eslint({ project, typing });
  }

  private async git({ project }: IInProcessingDTO) {
    execCommands.execute({ commands: `cd ${project} && git init` });

    await writeFile.execute({
      filename: '.gitignore',
      text: gitIgnore,
      directory_name: project,
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
        json: tsconfig,
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
      json,
    });
  }

  private async eslint({ project, typing }: IInProcessingDTO) {
    const response = new eslintConfig(typing);

    await writeFile.execute({
      directory_name: project,
      filename: ['.eslintrc.js', '.eslintignore'],
      text: [response.configJs, response.ignore],
    });
  }

  private finished({ project }: IInProcessingDTO) {
    execCommands.execute({ commands: `cd ${project} && yarn` });
    console.log('\nFINALIZADO');
  }
}

export { Processig };
