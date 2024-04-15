import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { app } from '../../server';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsightsComponent } from './insights/insights.component';
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { RegistrationpageComponent } from "./registrationpage/registrationpage.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { UploadpageComponent } from "./uploadpage/uploadpage.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { ChatboxComponent} from './chatbox/chatbox.component';
import { QuerypageComponent } from './querypage/querypage.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, DashboardComponent, LoginpageComponent, RegistrationpageComponent, SidenavComponent, UploadpageComponent, LandingpageComponent, ChatboxComponent, QuerypageComponent]
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
