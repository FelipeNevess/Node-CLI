import {
  gitConfig,
  editorConfig,
  readmeConfig,
  envConfig,
} from './filesUtilities';

import { json } from './JsonFiles';
import { serverConfigTs, serverConfigJs } from './filesApp';

export const defaultSettings = {
  gitConfig,
  editorConfig,
  readmeConfig,
  envConfig,
};

export const javascriptSettings = {
  serverConfigJs,
  javascript: json.javascript(),
};

export const typescriptSettings = {
  serverConfigTs,
  typescript: json.typescript(),
};
