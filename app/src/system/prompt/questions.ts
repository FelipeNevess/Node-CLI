import { IQuestions } from './interface';

const questions: Array<IQuestions> = [
  {
    type: 'text',
    name: 'project',
    message: `O nome do meu projeto será:`,
    initial: 'my-app',
  },
  {
    type: 'toggle',
    name: 'git',
    message: 'Quero inicializar o Git no meu projeto?',
    initial: true,
    active: 'yes',
    inactive: 'no',
  },

  {
    type: 'toggle',
    name: 'typing',
    message: 'Quero criar meu projeto com Typescript?',
    initial: true,
    active: 'yes',
    inactive: 'no',
  },

  // {
  //   type: 'select',
  //   name: 'ORM',
  //   message: 'Deseja usar ORM?',
  //   choices: [
  //     {
  //       title: 'Sequelize',
  //       value: 'sequelize',
  //     },
  //     {
  //       title: 'Prisma',
  //       value: 'prisma',
  //     },
  //     {
  //       title: 'Não desejo utilizar ORM',
  //       value: null,
  //     },
  //   ],
  //   initial: 0,
  //   max: 1,
  // },

  // {
  //   type: 'select',
  //   name: 'DB',
  //   message: 'Qual banco de dados deseja usar?',
  //   choices: [
  //     {
  //       title: 'MYSQL',
  //       value: 'mysql',
  //     },
  //     {
  //       title: 'Posgresql',
  //       value: 'posgres',
  //     },
  //     {
  //       title: 'MongoDB',
  //       value: 'mongo',
  //     },
  //   ],
  //   initial: 0,
  //   max: 1,
  // },
];

export { questions };
