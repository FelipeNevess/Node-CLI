import { ExeCommands } from '../../../utils/exec';

export interface IData {
  directory_name: string | Array<string>;
  filename: string | Array<string>;
  text?: string | Array<string>;
  formate?: boolean | Array<boolean>;
  json?: object | Array<object>;
}

export interface IUseful {
  initial_msg?: string;
  final_msg?: string;
  final_comands?: ExeCommands;
}
