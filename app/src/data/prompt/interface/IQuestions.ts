interface IChoices {
  title: string;

  description?: string;

  value?: string | null;

  disabled?: boolean;
}

export interface IQuestions {
  type: string;

  name: string;

  message: string;

  initial?: boolean | number | string;

  choices?: Array<IChoices>;

  max?: number;

  active?: string;

  inactive?: string;
}
