import { ILessonInterface } from 'src/app/modules/lessons/shared/types/lesson.interface';
import { IUser } from 'src/app/modules/users/shared/types/user.interface';

export interface ITeamDetails {
  id: number;
  InvitationCode: {
    code: string;
  };
  owner: {
    id: number;
    name: string;
    email: string;
  };
  createdAt: string;
  UsersOnTeams: [user: IUser];
  Lesson: ILessonInterface[];
  name: string;
}
