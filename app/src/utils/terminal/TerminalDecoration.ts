import { red } from 'chalk';
import { textSync } from 'figlet';

class TerminalDecoration {
  decorate(text: string) {
    const responseText = red(textSync(text, { horizontalLayout: 'full' }));

    console.log(responseText);
  }
}

export { TerminalDecoration };
