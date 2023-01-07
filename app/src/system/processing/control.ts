import { IWriteFile } from '../../utils/write/interface';
import { IData, IUseful } from './interfaces';
import {
  editorconfig,
  eslintConfig,
  gitIgnore,
  prettierrc,
  readme,
  serverJav,
  serverTyp,
  tsconfig,
  vcCodeSettings,
  whichJSON,
  sequelise,
} from './packages';

class Control {
  private eslintConf = new eslintConfig(this.typing);
  private initial_data: IData = {
    directory_name: this.project,
    filename: '',
    text: '',
    formate: false,
    json: {},
  };
  private data = {
    git: {
      ...this.initial_data,
      filename: '.gitignore',
      text: gitIgnore,
    },
    code: {
      ...this.initial_data,
      directory_name: `${this.project}/.vscode`,
      filename: 'settings.json',
      formate: true,
      json: vcCodeSettings,
    },
    initial: {
      ...this.initial_data,
      filename: ['.editorconfig', '.prettierrc.js', 'readme.md'],
      text: [editorconfig, prettierrc, readme],
    },
    json: {
      ...this.initial_data,
      filename: 'package.json',
      formate: true,
      json: new whichJSON(this.typing, this.orm).json,
    },
    eslint: {
      ...this.initial_data,
      filename: ['.eslintrc.js', '.eslintignore'],
      text: [this.eslintConf.configJs, this.eslintConf.ignore],
    },
    with_typing: {
      directory_name: [`${this.project}/src`, this.project],
      filename: ['server.ts', 'tsconfig.json'],
      text: [serverTyp, ''],
      formate: [false, true],
      json: [{}, tsconfig],
    },
    no_typing: {
      directory_name: `${this.project}/src`,
      filename: 'server.js',
      text: serverJav,
    },
    orms: {
      sequelize: {
        directory_name: [
          this.project,
          this.project,
          `${this.project}/app`,
          `${this.project}/config`,
          `${this.project}/app/controllers`,
          `${this.project}/app/controllers`,
          `${this.project}/app/models`,
          `${this.project}/app/models`,
          `${this.project}/app/routes`,
          `${this.project}/app/routes`,
          `${this.project}/app/services`,
          `${this.project}/app/services`,
        ],
        filename: [
          '.sequelizerc',
          '.env',
          'server.js',
          'database.js',
          'index.js',
          'users_controller.js',
          'index.js',
          'user.js',
          'index.js',
          'user_routes.js',
          'index.js',
          'user_services.js',
        ],
        text: [
          sequelise.sequelizerc,
          sequelise.env,
          sequelise.server,
          sequelise.database,
          sequelise.index_controller,
          sequelise.user_controller,
          sequelise.index_model,
          sequelise.user_model,
          sequelise.index_router,
          sequelise.user_router,
          sequelise.index_service,
          sequelise.user_service,
        ],
      },
    },
  };

  constructor(
    private project: string,
    private typing: boolean | undefined,
    private infos: Array<string>,
    private orm: string | boolean,
    private process: IWriteFile,
  ) {}

  async exec({
    initial_msg,
    final_msg,
    final_comands,
  }: IUseful): Promise<void> {
    console.log(initial_msg);

    await Promise.all(
      this.infos.map(
        async (item) =>
          await this.process.execute(this.data[item as keyof object]),
      ),
    );

    final_comands?.execute({
      commands: `cd ${this.project} && yarn`,
    });

    // No momento só é gerado sem tipagem
    if (this.orm && !this.typing) await this.exec_orm({ final_comands });

    console.log(final_msg);
  }

  private async exec_orm({ final_comands }: IUseful): Promise<void> {
    const data = new Date();
    const day = String(data.getDate()).padStart(2, '0');
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const year = data.getFullYear();

    const current_date = year + month + day;

    // No momento ele está executando sequelize como ORM principal
    final_comands?.execute({
      commands: `
        cd ${this.project} &&
        npx sequelize init &&
        mkdir database &&
        rm -rf config/config.json &&
        rm -rf models/index.js &&
        mv ./migrations ./seeders ./database &&
        mv ./src ./app &&
        mv ./models ./app &&
        cd app &&
        mkdir controllers routes services
      `,
    });

    setTimeout(async () => {
      await this.process.execute(this.data.orms[this.orm as keyof object]);
    }, 1000);

    setTimeout(async () => {
      await this.process.execute({
        directory_name: `${this.project}/database/migrations`,
        filename: `${current_date}235103-create-users.js`,
        text: sequelise.user_migration,
      });
    }, 2000);
  }
}

export { Control };
