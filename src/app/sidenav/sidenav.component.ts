import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule,CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  faCloudArrowUp = faCloudArrowUp
  faChartLine = faChartLine
  faRightFromBracket = faRightFromBracket
  faComment = faComment
  faMagnifyingGlass = faMagnifyingGlass
}
