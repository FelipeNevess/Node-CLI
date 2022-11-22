export interface IJson {
  main: string,
  scripts: {
    "dev"?: string,
    "start"?: string
  },
  dependencies: {
    "body-parser"?: string,
    "cors"?: string,
    "express"?: string,
    "uuid"?: string,
  },
  devDependencies: {
    "dotenv"?: string,
    "express-async-errors"?: string,
    "mysql2"?: string,
    "nodemon"?: string,
    "typescript"?: string,
    "ts-node-dev"?: string,
    "@types/body-parser"?: string,
    "@types/cors"?: string,
    "@types/express"?: string
  }
}
