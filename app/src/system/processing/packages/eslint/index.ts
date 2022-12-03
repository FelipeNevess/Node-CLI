import { eslintJs } from './eslintJs';
import { eslintTs } from './eslintTs';

class eslintConfig {
  private tscript: boolean | undefined;

  public configJs = eslintJs;
  public ignore = `
    /*.js
    node_modules
    dist
  `
    .toString()
    .replaceAll('  ', '')
    .trim();

  constructor(tscript: boolean | undefined) {
    this.tscript = tscript;

    this.typescript();
  }

  private typescript() {
    if (this.tscript) {
      this.configJs = eslintTs;
    }
  }
}

export { eslintConfig };
