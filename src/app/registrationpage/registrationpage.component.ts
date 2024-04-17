import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {faLockOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registrationpage',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './registrationpage.component.html',
  styleUrl: './registrationpage.component.css'
})
export class RegistrationpageComponent {
  faUser = faUser
  faEnvelopeOpen = faEnvelopeOpen
  faLockOpen = faLockOpen

}
