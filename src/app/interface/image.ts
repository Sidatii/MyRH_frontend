import {Recruiter} from "./recruiter";

export interface Image {
  id: number;
  name: string;
  type: string;
  url: string;
  recruiter: Recruiter;
}
