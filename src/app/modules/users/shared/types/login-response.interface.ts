export interface ILoginResponse {
  user: {
    name: string;
    email: string;
    token: string;
    role: string;
  };
}
