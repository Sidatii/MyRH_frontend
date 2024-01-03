import {Image} from "./image";

export interface Recruiter {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  files: File[];
  images: Image[];
}
