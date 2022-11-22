export interface ICheckDTO {
  commands?: string | Array<string>;
  filename?: string | Array<string>;
  directory?: string;
  text?: string | Array<string>;
  err?: Error;
}
