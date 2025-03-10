import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private navbarState = new BehaviorSubject<boolean>(false);
  isOpen$ = this.navbarState.asObservable();

  toggleNav() {
    this.navbarState.next(!this.navbarState.value);
    console.log('hey there this is a service')
  }

  closeNav() {
    this.navbarState.next(false);
  }
}
