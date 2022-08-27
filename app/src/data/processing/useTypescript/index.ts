import { javascriptSettings, typescriptSettings } from '../../packages';
import { tsNode } from '../../commands';
import { IUseTypescript } from './interface/IUseTypescript';
import { IRegex } from '../regex/interface/IRegex';

export class UseTypescript implements IUseTypescript {
  constructor(private regex: IRegex) {}

  useTypescript(useType: string) {
    const useTypescript = this.regex.regex(useType);

    const response = useTypescript
      ? javascriptSettings
      : {
          ...typescriptSettings,
          ...tsNode,
        };

    return response;
  }
}
