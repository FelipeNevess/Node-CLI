import { App } from './app';
import { Initialize } from './initialize';

const initialize = new Initialize();
const app = new App(initialize);

export { app };
