import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ApplyComponent} from "./pages/apply/apply.component";
import {OffersComponent} from "./pages/offers/offers.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'apply', component: ApplyComponent },
];
