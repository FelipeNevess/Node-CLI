import { Prompt } from './src/data/prompt';
import { App } from './src/app';

const prompt = new Prompt();
const app = new App(prompt);

app.getStarted();
