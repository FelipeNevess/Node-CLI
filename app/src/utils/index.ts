import { Check } from './check';
import { TerminalDecoration } from './terminal';

import { ExecSync } from '../utils/exec/exec';
import { ExecCommands } from '../utils/exec';

import { ReadFile } from './read';
import { ReadFilePromises } from './read/read';

import { WriteFile } from './write';
import { WriteFilePromises } from './write/write';

///////////////////////////////////////////
// Validação de informações
const check = new Check();

//////////////////////////////////////////
// Uso da biblioteca readFile do Nodejs
const readFilePromises = new ReadFilePromises();
const readFile = new ReadFile(readFilePromises, check);

//////////////////////////////////////////
// Uso da biblioteca writeFile do Nodejs
const writeFilePromises = new WriteFilePromises();
const writeFile = new WriteFile(writeFilePromises, check);

//////////////////////////////////////////
// Uso da biblioteca ExecSync do Nodejs //
const execSync = new ExecSync();
const execCommands = new ExecCommands(execSync, check);

//////////////////////////////////////////
const terminalDecoration = new TerminalDecoration();

////////////// Export files //////////////

export { readFile, writeFile, execCommands, terminalDecoration };
