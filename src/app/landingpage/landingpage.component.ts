import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faCircleArrowDown} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  faRocket = faRocket
  faWallet = faWallet
  faCircleCheck = faCircleCheck
  faCircleArrowDown = faCircleArrowDown

  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Update scrolled state based on scroll position
    this.isScrolled = window.scrollY > 50; // Change threshold as needed
  }

}
