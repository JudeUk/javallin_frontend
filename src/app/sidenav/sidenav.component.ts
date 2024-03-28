import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  faCloudArrowUp = faCloudArrowUp
  faChartLine = faChartLine
  faRightFromBracket = faRightFromBracket
}
