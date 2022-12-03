export interface IJson {
  name: string;
  main: string;
  scripts: {
    dev?: string;
    start?: string;
  };
  dependencies: {
    cors?: string;
    express?: string;
    uuid?: string;
    'body-parser'?: string;
  };
  devDependencies: {
    dotenv?: string;
    mysql2?: string;
    nodemon?: string;
    typescript?: string;
    prettier?: string;
    eslint?: string;
    'ts-node-dev'?: string;
    '@types/body-parser'?: string;
    '@types/cors'?: string;
    '@types/express'?: string;
    '@types/node'?: string;
    'express-async-errors'?: string;
    '@typescript-eslint/eslint-plugin'?: string;
    '@typescript-eslint/parser'?: string;
    'eslint-config-airbnb-base'?: string;
    'eslint-config-prettier'?: string;
    'eslint-plugin-import'?: string;
    'eslint-plugin-prettier'?: string;
  };
}
