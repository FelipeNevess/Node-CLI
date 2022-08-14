import { IJsonFiles } from './interface';
import { IJsonFilesDTO } from './interface';

export class Json implements IJsonFiles {
  javascript(): IJsonFilesDTO {
    return {
      main: 'src/server.js',

      scripts: {
        dev: 'nodemon src/server.js',
      },

      dependencies: {
        express: '^4.18.1',

        uuid: '^8.3.2',
      },

      devDependencies: {
        dotenv: '^16.0.1',

        'express-async-errors': '^3.1.1',

        mysql2: '^2.3.3',

        nodemon: '^2.0.16',
      },
    };
  }

  typescript(): IJsonFilesDTO {
    const json = new Json();

    const { devDependencies, dependencies } = json.javascript();

    return {
      main: 'src/server.ts',
      scripts: {
        dev: 'ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts',
        start: 'nodemon src/server.ts',
      },
      dependencies: { ...devDependencies },
      devDependencies: {
        ...dependencies,
        typescript: '^4.7.2',
        'ts-node-dev': '^2.0.0',
        '@types/express': '^4.17.13',
      },
    };
  }
}
