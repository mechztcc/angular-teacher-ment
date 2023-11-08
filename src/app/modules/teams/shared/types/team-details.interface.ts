export interface ITeamDetails {
  id: number;
  owner: {
    id: number;
    name: string;
    email: string;
  };
  createdAt: string;
  UsersOnTeams: []
  Lesson: []
}
