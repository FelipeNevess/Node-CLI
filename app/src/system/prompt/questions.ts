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
  {
    type: 'select',
    name: 'orm',
    message: 'Quero utilizar ORM no meu projeto?',
    choices: [
      {
        title: 'Sequelize',
        value: 'sequelize',
      },
      // {
      //   title: 'Prisma',
      //   value: 'prisma',
      // },
      {
        title: 'Não usar ORM',
        value: false,
      },
    ],
    initial: 0,
    max: 1,
  },
];

export { questions };
