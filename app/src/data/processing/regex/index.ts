import { IRegex } from './interface/IRegex';

export class Regex implements IRegex {
  regex = (p: string): boolean => {
    const testRegex = /^(N|NO)$/i.test(p);

    return testRegex;
  };
}
