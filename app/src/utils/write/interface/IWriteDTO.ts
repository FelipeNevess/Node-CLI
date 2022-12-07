export interface IWriteDTO {
  filename: string;
  text?: string | Array<string>;
  directory_name: string | Array<string>;
  formate?: boolean | Array<boolean>;
  json?: object;
}
