import { IDifficulty } from 'src/app/modules/difficulties/shared/types/difficulty.interface';

export interface ILessonInterface {
  id: number;
  name: string;
  isOpened: boolean;
  difficulty: IDifficulty;
  team: {
    id: number;
    name: string;
  };
  questions: [];
  createdAt: string;
}
