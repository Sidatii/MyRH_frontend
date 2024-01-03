import {Offer} from "./offer";
import {Assessment} from "../enum/assessment";

export interface Application {
  id: number;
  fullName: string;
  email: string;
  offer: number;
  fileList: File[];
  assessment: Assessment;
}
