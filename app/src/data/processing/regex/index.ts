import { Iregex } from './interface/IRegex';

export class Regex implements Iregex {
  regex = (p: string): boolean => {
    const testRegex = /^(N|NO)$/i.test(p);

    return testRegex;
  };
}
