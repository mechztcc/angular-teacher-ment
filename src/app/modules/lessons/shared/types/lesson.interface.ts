export interface ILessonInterface {
  id: number;
  name: string;
  isOpened: boolean;
  level: number;
  team: {
    id: number;
    name: string;
  };
  questions: [];
  createdAt: string;
}
