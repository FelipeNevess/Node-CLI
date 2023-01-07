export const user_router = `
const { Router } = require('express');
const { index, show, update, create, delette } = require('../controllers');

const user_route = Router();

user_route.get('/', index);
user_route.get('/:id', show);
user_route.put('/:id', update);
user_route.post('/register', create);
user_route.delete('/:id', delette);

module.exports = user_route;

`;

export const index_router = `
const { Router } = require('express');

const user_routes = require('./user_routes');

const routes = Router();

routes.use('/users', user_routes);

module.exports = routes;

`;
