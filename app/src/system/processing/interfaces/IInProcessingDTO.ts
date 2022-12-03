import { IJson } from '../packages/json/interfaces';

export interface IInProcessingDTO {
  project: string;
  git?: string | boolean;
  typing?: boolean;
  json?: IJson;
}
