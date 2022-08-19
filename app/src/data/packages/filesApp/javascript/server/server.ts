export const serverConfigJs = `
  const express = require('express');
  const cors = (_req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    res.set('Access-Control-Allow-Headers', '*');
    next();
  }
  const app = express();
  const port = process.env.PORT || 3333;
  app.use(express.json());
  // Config base cors
  app.use(cors())
  app.get('/', (_req, res) => res
    \t.status(200)
    \t.json({ name: "Hello World!" }));
  app.listen(port, () => console.log('Service started 🟢'));
`;
