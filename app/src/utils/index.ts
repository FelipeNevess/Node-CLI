import { ExecSync } from '../utils/exec/exec';
import { ExecCommands } from '../utils/exec';

import { ReadFile } from './read';
import { ReadFilePromises } from './read/read';

import { WriteFile } from './write';
import { WriteFilePromises } from './write/write';

//////////////////////////////////////////
// Uso da biblioteca readFile do Nodejs
const readFilePromises = new ReadFilePromises();
const readFile = new ReadFile(readFilePromises);

//////////////////////////////////////////
// Uso da biblioteca writeFile do Nodejs
const writeFilePromises = new WriteFilePromises();
const writeFile = new WriteFile(writeFilePromises);

//////////////////////////////////////////
// Uso da biblioteca ExecSync do Nodejs //
const execSync = new ExecSync();
const execCommands = new ExecCommands(execSync);

////////////// Export files //////////////

export { readFile, writeFile, execCommands };
