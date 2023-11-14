import { IAlternative } from './alternative.interface';

export interface IQuestion {
  title: string;
  topic: { name: string };
  pontuation: number;
  alternatives: IAlternative[];
  QuestionImage?: [];
  id: number;
}
