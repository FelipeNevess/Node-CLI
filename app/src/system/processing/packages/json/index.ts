import { IJson } from './interfaces';

class whichJSON {
  private tscript: boolean | undefined;
  public json: IJson = {
    name: 'project-node-js',
    main: 'src/server.js',
    scripts: {
      dev: 'nodemon src/server.js',
    },
    dependencies: {
      'body-parser': '^1.20.0',
      cors: '^2.8.5',
      express: '^4.18.1',
    },
    devDependencies: {
      nodemon: '^2.0.16',
      prettier: '^2.7.1',
      eslint: '^8.21.0',
      'eslint-config-airbnb-base': '^15.0.0',
      'eslint-config-prettier': '^8.5.0',
      'eslint-plugin-import': '^2.25.2',
      'eslint-plugin-prettier': '^4.2.1',
    },
  };

  constructor(tscript: boolean | undefined) {
    this.tscript = tscript;

    this.typescript();
  }

  private typescript() {
    if (this.tscript) {
      delete this.json.devDependencies.nodemon;

      this.json = {
        name: 'project-node-ts',
        main: 'src/server.ts',
        scripts: {
          dev: 'ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts',
          start: 'nodemon src/server.ts',
        },
        dependencies: this.json.dependencies,
        devDependencies: {
          ...this.json.devDependencies,
          typescript: '^4.7.2',
          'ts-node-dev': '^2.0.0',
          '@types/body-parser': '^1.19.2',
          '@types/cors': '^2.8.12',
          '@types/express': '^4.17.13',
          '@types/node': '^18.7.2',
          '@typescript-eslint/eslint-plugin': '^5.32.0',
          '@typescript-eslint/parser': '^5.32.0',
        },
      };
    }
  }
}

export { whichJSON };
