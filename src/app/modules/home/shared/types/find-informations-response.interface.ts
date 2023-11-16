import { ILessonInterface } from 'src/app/modules/lessons/shared/types/lesson.interface';
import { ITeam } from 'src/app/modules/teams/shared/types/team.interface';

export interface IFindInformationsResponse {
  teamsCount: number;
  studentsCount: number;
  lessonsCount: number;
  runningLessons: ILessonInterface[];
  team: ITeam;
}
