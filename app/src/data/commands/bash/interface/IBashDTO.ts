interface IBash {
  bash: object;
}

export interface IBashDTO extends IBash {
  bash: {
    npm: string;
    mkdir: string;
    touch: string;
  };
}
