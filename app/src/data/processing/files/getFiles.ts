import { IFilesDTO, IGetFiles } from './interfaces';
import {
  defaultSettings,
  javascriptSettings,
  typescriptSettings,
} from '../..';

class GetFiles implements IGetFiles {
  constructor(private files: Array<object> = []) { }

  execute({ git, typing }: IFilesDTO) {
    this.useGit(git);
    this.useTypescript(typing);

    return this.files;
  }

  private useGit(git: boolean): void {
    if (git) {
      this.files.push({
        git: defaultSettings,
      });
    } else {
      this.files.push({
        editor_config: defaultSettings.editorConfig,
        readme_config: defaultSettings.readmeConfig,
      });
    }
  }

  private useTypescript(typing: boolean): void {
    if (typing) {
      this.files.push({
        typescript: typescriptSettings,
      });
    } else {
      this.files.push({
        javascript: javascriptSettings,
      });
    }
  }
}

export { GetFiles };
