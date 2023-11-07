export interface ILessonInterface {
  id: number;
  name: string;
  isOpened: boolean;
  team: {
    id: number;
    name: string;
  };
  questions: [];
  createdAt: string;
}
