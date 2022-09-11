export interface ICheckDTO {
  commands?: string | Array<string>;
  filename?: string;
  directory?: string;
  text?: string | Promise<string | undefined>;
  err?: Error;
}
