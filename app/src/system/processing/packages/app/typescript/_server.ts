export const serverTyp = `
  import express from 'express';
  import bodyParser from 'body-parser';
  import cors from 'cors';

  const app = express();
  const port = process.env.PORT || 3333;

  app.use(bodyParser.json());
  app.use(cors({ origin: "http://localhost:3333", methods: "GET" }));

  app.get('/', (_req, res) => res
    \t.status(200)
    \t.json({ name: "Hello World!" })
  );

  app.listen(port, () => console.log('Service started 🟢'));
`.toString().replaceAll('  ', '').trim();
