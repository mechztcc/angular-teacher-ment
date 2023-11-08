import { ILessonInterface } from "src/app/modules/lessons/shared/types/lesson.interface";

export interface ITeamDetails {
  id: number;
  owner: {
    id: number;
    name: string;
    email: string;
  };
  createdAt: string;
  UsersOnTeams: [];
  Lesson: ILessonInterface[];
  name: string;
}
