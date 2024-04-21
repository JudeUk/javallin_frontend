import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {faLockOpen} from '@fortawesome/free-solid-svg-icons';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { environment } from '../../../environment/environment';
import { environmentProd } from '../../environment/environmentProd';


@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
faUser = faUser
faEnvelopeOpen = faEnvelopeOpen
faLockOpen = faLockOpen
// envLocal :any = process.env['FIRE_BASE_CONF'];



private auth: any;
  router: any;


  
ngOnInit() {
  // const app = initializeApp(environment.firebaseConfig); // Initialize Firebase app
  const app = initializeApp(environmentProd.firebaseConfigProd); // Initialize Firebase app for Deployment on Prod
  // this.auth = getAuth(app); // Get Authentication service
  this.auth = getAuth(app);
}

signInWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(this.auth, googleProvider)
    .then((result) => {
      // User signed in successfully
      const user = result.user;
      this.router(['/uploadfiles']);
      console.log('Logged in user:', user);
    })
    .catch((error) => {
      console.error('Sign in error:', error);
    });
}

}
