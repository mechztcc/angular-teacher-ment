import { IAlternative } from './alternative.interface';

export interface ICreateQuestion {
  title: string;
  topic: number;
  pontuation: number;
  alternatives: IAlternative[];
}
