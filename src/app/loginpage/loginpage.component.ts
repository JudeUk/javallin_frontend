import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {faLockOpen} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
faUser = faUser
faEnvelopeOpen = faEnvelopeOpen
faLockOpen = faLockOpen

}