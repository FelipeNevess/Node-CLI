export interface IWriteFiles {
  filename: string | Array<string>;
  text: string | Array<string>;
  directory_name: string | Array<string>;
  formate?: boolean | Array<boolean>;
  json?: object | Array<object>;
}
