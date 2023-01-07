export const user_service = `
const { User, sequelize } = require('../models');

exports.index = async function () {
  const users = await User.findAll();

  return users;
};

exports.show = async function (id) {
  try {
    const user = await User.findByPk(id);

    return user;
  } catch {
    return { erro: 'Usuário não encontrado!' };
  }
};

exports.update = async function (id, name, email, password) {
  const transaction = await sequelize.transaction();
  try {
    const user = await User.findByPk(id);
    await user.update(
      {
        name,
        email,
        password,
      },
      { transaction },
    );

    await transaction.commit();

    return { message: 'Usuário atualizado com sucesso!' };
  } catch {
    await transaction.rollback();

    return { erro: 'Erro na atualização de usuário!' };
  }
};

exports.create = async function (name, email, password) {
  const transaction = await sequelize.transaction();
  try {
    await User.create(
      {
        name,
        email,
        password,
      },
      { transaction },
    );
    await transaction.commit();

    return { message: 'Usuário criado com sucesso!' };
  } catch {
    await transaction.rollback();

    return { erro: 'Erro na criacão de usuário!' };
  }
};

exports.delette = async function (id) {
  try {
    const user = await User.findByPk(id);

    await user.destroy();

    return { message: 'Usuário deletado com sucesso!' };
  } catch {
    return { erro: 'Erro ao deletar o usuário!' };
  }
};
`;

export const index_service = `
const { index, show, update, create, delette } = require('./user_services');

module.exports = {
  index,
  show,
  update,
  create,
  delette,
};
`;
