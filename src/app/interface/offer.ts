import {Level} from "../enum/level";
import {Recruiter} from "./recruiter";
import {Profile} from "../enum/profile";
import {OfferStatus} from "../enum/offer-status";

export interface Offer {
  id: number;
  title: string;
  description: string;
  city: string;
  profile: Profile;
  Level: Level;
  salary: number;
  recruiter: Recruiter;
  offerStatus: OfferStatus;
}
