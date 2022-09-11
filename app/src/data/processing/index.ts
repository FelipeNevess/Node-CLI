import { execCommands, writeFile } from '../../utils';

import { GetCommands } from './commands/getCommands';
import { GetFiles } from './files/getFiles';
import { Commands } from './commands';
import { Files } from './files';

import { Processig } from './processing';

const commands = new Commands(execCommands);
const files = new Files(writeFile);
const processing = new Processig(commands, files);

const getCommands = new GetCommands();
const getFiles = new GetFiles();

export { processing, getCommands, getFiles };
