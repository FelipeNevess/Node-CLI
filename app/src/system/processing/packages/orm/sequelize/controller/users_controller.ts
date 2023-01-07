export const user_controller = `
const { index, show, update, create, delette } = require('../services');

exports.index = async function (_req, res) {
  const users = await index();

  return res.status(200).json(users);
};

exports.show = async function (req, res) {
  const { id } = req.params;
  const response = await show(id);

  if (response.erro) {
    return res.status(500).json(response);
  }

  return res.status(200).json(response);
};

exports.update = async function (req, res) {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const response = await update(id, name, email, password);

  if (response.erro) {
    return res.status(500).json(response);
  }

  return res.status(204).json(response);
};

exports.create = async function (req, res) {
  const { name, email, password } = req.body;
  const response = await create(name, email, password);

  if (response.erro) {
    return res.status(500).json(response);
  }

  return res.status(200).json(response);
};

exports.delette = async function (req, res) {
  const { id } = req.params;

  const response = await delette(id);

  if (response.erro) {
    return res.status(500).json(response);
  }

  return res.status(204).json(response);
};

`;

export const index_controller = `
const { index, show, update, create, delette } = require('./users_controller');

module.exports = {
  index,
  show,
  update,
  create,
  delette,
};

`;
