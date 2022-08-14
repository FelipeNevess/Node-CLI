interface IGit {
  git: object;
}

export interface IGitDTO extends IGit {
  git: {
    gitInit: string;
    gitIgnore: string;
  };
}
