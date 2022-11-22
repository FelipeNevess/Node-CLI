import { IJson } from './interfaces';

class whichJSON {
  private tcript: boolean | undefined
  public json: IJson = {
    main: "src/server.js",
    scripts: {
      "dev": "nodemon src/server.js"
    },
    dependencies: {
      "body-parser": "^1.20.0",
      "cors": "^2.8.5",
      "express": "^4.18.1",
      "uuid": "^8.3.2"
    },
    devDependencies: {
      "dotenv": "^16.0.1",
      "express-async-errors": "^3.1.1",
      "mysql2": "^2.3.3",
      "nodemon": "^2.0.16"
    }
  }

  constructor(tcript: boolean | undefined) {
    this.tcript = tcript;

    this.typescript();
  }

  return_json(): IJson {
    return this.json;
  }

  private typescript() {
    if (this.tcript) {
      this.json = {
        main: "src/server.ts",
        scripts: {
          "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts",
          "start": "nodemon src/server.ts"
        },
        dependencies: this.json.dependencies,
        devDependencies: {
          ...this.json.devDependencies,
          "typescript": "^4.7.2",
          "ts-node-dev": "^2.0.0",
          "@types/body-parser": "^1.19.2",
          "@types/cors": "^2.8.12",
          "@types/express": "^4.17.13"
        }
      }
    }
  }
}

export { whichJSON }
