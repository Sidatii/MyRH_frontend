import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Offer} from "../../interface/offer";
import {OfferService} from "../../services/offer/offer.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    RouterLink
  ],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})
export class OfferCardComponent {
  @Input() offer: any;

  constructor() {
  }


  Tab = "Offer";

  showTab(tab: string) {
    this.Tab = tab;
  }



}
