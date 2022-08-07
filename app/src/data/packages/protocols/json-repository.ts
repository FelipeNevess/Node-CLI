import { IJsonFiles } from '../interface';

export interface JsonRepository {
  javascript: () => IJsonFiles;
  typescript: () => IJsonFiles;
}
