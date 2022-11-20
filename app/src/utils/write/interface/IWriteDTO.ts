export interface IWriteDTO {
  filename: string;
  text: string | Promise<string | undefined>;
}
