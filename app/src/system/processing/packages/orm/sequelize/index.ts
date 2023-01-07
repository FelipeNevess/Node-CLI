import { database } from './config/database';

import { index_controller, user_controller } from './controller';
import { index_model, user_model } from './model';
import { index_router, user_router } from './router';
import { index_service, user_service } from './service';
import { user_migration } from './migration';

import { env, sequelizerc } from './main';
import { server } from './server';

const sequelise = {
  database,
  index_controller,
  user_controller,
  index_model,
  user_model,
  index_router,
  user_router,
  index_service,
  user_service,
  env,
  sequelizerc,
  server,
  user_migration,
};

export { sequelise };
