import { IProfile } from "./profile.interface";

export interface IProfileDetails {
  id: number;
  email: string;
  name: string;
  role: string;
  profile: IProfile
}
