import { javascriptSettings, typescriptSettings } from '../../packages';
import { tsNode } from '../../commands';
import { Regex } from '../regex';
import { IUseTypescript } from './interface/IUseTypescript';

export class UseTypescript implements IUseTypescript {
  constructor(private regex: Regex) {}

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
