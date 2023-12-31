import { IAlternative } from './alternative.interface';

export interface ICreateQuestion {
  title: string;
  topic: number | { name: string };
  pontuation: number;
  alternatives: IAlternative[];
  QuestionImage?: [];
}
