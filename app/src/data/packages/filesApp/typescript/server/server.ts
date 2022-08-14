export const serverConfigTs = `
import express from 'express';

require('express-async-errors');

class App {
  public app: express.Application = express();

  constructor() {
    this.config()
  }

  private config(): void {
    const cors: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', '*');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(cors);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log('iniciado porta:', PORT));
  }
}

export { App };

export const { app } = new App();
`;
