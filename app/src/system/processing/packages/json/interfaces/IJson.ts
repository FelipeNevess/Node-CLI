export interface IJson {
  name?: string;
  version?: string;
  main?: string;
  license?: string;
  scripts: {
    dev?: string;
    start?: string;
    'db:create'?: string;
    'db:migrate'?: string;
  };
  dependencies: {
    cors?: string;
    express?: string;
    uuid?: string;
    sequelize?: string;
    mysql2?: string;
    dotenv?: string;
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
    'sequelize-cli'?: string;
  };
}
