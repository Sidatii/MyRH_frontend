import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {OfferCardComponent} from "../../component/offer-card/offer-card.component";
import {Offer} from "../../interface/offer";
import {OfferService} from "../../services/offer/offer.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-offers',
  standalone: true,
    imports: [
        NgForOf,
        OfferCardComponent
    ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {

  offers: Offer[] | undefined;

  constructor(private _service: OfferService,
              private _http: HttpClient) {
  }

  ngOnInit() {
    this._service.getAllPaginated().subscribe(data => {
      this.offers = data.content;
    });
  }

}
