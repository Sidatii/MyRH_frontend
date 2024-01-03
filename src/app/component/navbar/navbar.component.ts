import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'navbar';

  navLinks = [
    { path: '', label: 'Home' },
    { path: 'offers', label: 'Offers' },
    { path: 'apply', label: 'apply' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
