export const sequelizerc = `
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.js'),
  'models-path': path.resolve('app', 'models'),
  'seeders-path': path.resolve('database', 'seeders'),
  'migrations-path': path.resolve('database', 'migrations'),
};`;

export const env = `
# ESTADO ATUAL DO PROJETO
NODE_ENV='development'

# DEVELOPMENT
USERNAME='root'
PASSWORD='password'
DB_NAME='my_database'
HOST='127.0.0.1'
PORT_DB='3306'
PORT='3333'

# TESTE
TEST_DB_USERNAME='root'
TEST_DB_PASSWORD='password'
TEST_DB_NAME='my_database_test'

# PRODUÇÃO
PROD_DB_USERNAME=''
PROD_DB_PASSWORD=''
PROD_DB_NAME=''
PROD_DB_HOSTNAME=''
PROD_DB_PORT=''
`;
