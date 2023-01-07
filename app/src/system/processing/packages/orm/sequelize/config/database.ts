export const database = `
require('dotenv').config();

const defaultValue = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.HOST,
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
  },
};

const database = {
  development: { ...defaultValue },
  test: {
    ...defaultValue,
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
  },
  production: {
    ...defaultValue,
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
  },
};

module.exports = database;

`;
