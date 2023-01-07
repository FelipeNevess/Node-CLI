export const server = `
const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000', methods: 'GET' }));

app.use(routes);

app.listen(port, () => console.log('Service started 🟢'));
`;
