export interface ITeam {
  id: number;
  name: string;
  UsersOnTeams: [{ id: number; name: string; email: string }];
  Lesson: [];
  createdAt: string;
}
