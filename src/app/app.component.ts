import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from "./landingpage/landingpage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LandingpageComponent]
})
export class AppComponent {

  title = 'javellin-frontend';

  data={
    courseTitle :'Javellin website'
  }
}
