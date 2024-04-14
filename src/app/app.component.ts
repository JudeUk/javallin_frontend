import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { app } from '../../server';
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { RegistrationpageComponent } from "./registrationpage/registrationpage.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { UploadpageComponent } from "./uploadpage/uploadpage.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { AnalyticsComponent } from "./analytics/analytics.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LoginpageComponent, RegistrationpageComponent, SidenavComponent, UploadpageComponent, LandingpageComponent,  AnalyticsComponent]
})
export class AppComponent {

  title = 'javellin-frontend';

  data={
    courseTitle :'Javellin website'
  }

  onClickAlert(){

    alert("Hello World!!!")
  }

  onKeyUp(inputTItle: string ){

    this.data.courseTitle=inputTItle;

  }
}
