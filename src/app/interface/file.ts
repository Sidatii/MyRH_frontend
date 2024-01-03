import {Application} from "./application";

export interface File {
  id: number;
  name: string;
  type: string;
  url: string;
  application: Application;
}
