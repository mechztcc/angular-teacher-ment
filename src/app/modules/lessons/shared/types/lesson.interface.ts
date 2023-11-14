import { IDifficulty } from 'src/app/modules/difficulties/shared/types/difficulty.interface';
import { IQuestion } from 'src/app/modules/questions/shared/types/question';

export interface ILessonInterface {
  id: number;
  name: string;
  isOpened: boolean;
  difficulty: IDifficulty;
  team: {
    id: number;
    name: string;
  };
  QuestionsOnLessons: IQuestion[];
  createdAt: string;
}
