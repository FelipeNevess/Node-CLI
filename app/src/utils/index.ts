import { Check } from './check';
import { TerminalDecoration } from './terminal';

import { ExecSync } from '../utils/exec/exec';
import { ExeCommands } from '../utils/exec';

import { WriteFile } from './write';
import { WriteFilePromises } from './write/write';

///////////////////////////////////////////
// Validação de informações
const check = new Check();

//////////////////////////////////////////
// Uso da biblioteca writeFile do Nodejs
const writeFilePromises = new WriteFilePromises();
const writeFile = new WriteFile(writeFilePromises, check);

//////////////////////////////////////////
// Uso da biblioteca ExecSync do Nodejs //
const execSync = new ExecSync();
const exeCommands = new ExeCommands(execSync, check);

//////////////////////////////////////////
const terminalDecoration = new TerminalDecoration();

////////////// Export files //////////////

export { writeFile, exeCommands, terminalDecoration };
