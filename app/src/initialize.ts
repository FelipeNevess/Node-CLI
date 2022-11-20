import clear from 'clear';

import { IInitialize } from './interfaces';
import { terminalDecoration } from './utils';
import { getCommands, getFiles, Prompt, Prompts, processing } from './data';

class Initialize implements IInitialize {
  async start(): Promise<void> {
    clear();
    terminalDecoration.decorate('Node CLI');

    const prompt = new Prompts();
    const { project, git, typing } = await new Prompt(prompt).execute();

    const responseCommands = getCommands.execute({
      git,
      typing,
    });

    const responseFiles = getFiles.execute({
      git,
      typing,
    });

    console.log(responseFiles);

    // processing.processingCommands({
    //   commands: [`mkdir ${project}`, `cd ${project} && ${responseCommands}`],
    // });

    // processing.processingFiles({
    //   filename: 'index.ts',
    //   text: 'felipe',
    //   projectName: project,
    // });
  }
}

export { Initialize };
