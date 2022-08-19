import { IJsonFilesDTO } from '.';

export interface IJsonFiles {
  javascript: () => IJsonFilesDTO;
  typescript: () => IJsonFilesDTO;
}
