interface ITsNode {
  execute: object;
}

export interface ITsNodeDTO extends ITsNode {
  execute: {
    'ts-node': string;
  };
}
