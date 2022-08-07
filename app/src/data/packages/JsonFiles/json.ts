import { IJsonFiles } from '../interface';
import { JsonRepository } from '../protocols/json-repository';

export class Json implements JsonRepository {
  javascript(): IJsonFiles {
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

  typescript(): IJsonFiles {
    return {
      main: 'src/server.ts',
      scripts: {
        dev: 'ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts',
        start: 'nodemon src/server.ts',
      },
      dependencies: { ...this.javascript().dependencies },
      devDependencies: {
        ...this.javascript().devDependencies,
        typescript: '^4.7.2',
        'ts-node-dev': '^2.0.0',
        '@types/body-parser': '^1.19.2',
        '@types/cors': '^2.8.12',
        '@types/express': '^4.17.13',
      },
    };
  }
}
