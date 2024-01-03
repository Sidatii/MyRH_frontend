import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "../../component/navbar/navbar.component";
import {FooterComponent} from "../../component/footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {HomeComponent} from "../../pages/home/home.component";
import {OfferCardComponent} from "../../component/offer-card/offer-card.component";
import {OfferService} from "../../services/offer/offer.service";
import {HttpClient} from "@angular/common/http";
import {Offer} from "../../interface/offer";
import {data} from "autoprefixer";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    HomeComponent,
    OfferCardComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
