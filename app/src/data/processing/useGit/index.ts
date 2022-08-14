import { Regex } from '../regex';
import { bash, git } from '../../commands';
import { defaultSettings } from '../../packages';
import { IUseGit } from './interface/IUseGit';

export class UseGit implements IUseGit {
  constructor(private regex: Regex) {}

  useGit(useGit: string): object {
    const verifyGitInput = this.regex.regex(useGit);

    const result = verifyGitInput
      ? {
          commands: { ...bash },
          files: {
            fileEditorConfig: defaultSettings.editorConfig,
            readmeConfig: defaultSettings.readmeConfig,
          },
        }
      : {
          commands: {
            ...bash,
            ...git,
          },
          files: { ...defaultSettings },
        };

    return result;
  }
}
