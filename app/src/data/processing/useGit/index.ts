import { bash, git } from '../../commands';
import { defaultSettings } from '../../packages';
import { IUseGit } from './interface/IUseGit';
import { IRegex } from '../regex/interface/IRegex';

export class UseGit implements IUseGit {
  constructor(private regex: IRegex) {}

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
