import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';
<<<<<<< HEAD
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { AnalyticsComponent } from './analytics/analytics.component';
=======
import { ChatboxComponent } from './chatbox/chatbox.component';
import { QuerypageComponent } from './querypage/querypage.component';
>>>>>>> 563dfdfcda3a70ece5075c57844092f36ccfbd20


export const routes: Routes = [
    {path: '', component: LandingpageComponent},
<<<<<<< HEAD
    { path: 'uploadfiles', component: UploadpageComponent },
    { path: 'login', component: LoginpageComponent },
    { path: 'signup', component: RegistrationpageComponent },
    {path: 'analytics',component:AnalyticsComponent}
=======
    {path:'dashboard', component: DashboardComponent},
    { path: 'insights', component: InsightsComponent },
    { path: 'upload', component: UploadpageComponent },
    { path: 'chatbox', component: ChatboxComponent },
    { path: 'querypage', component: QuerypageComponent},
>>>>>>> 563dfdfcda3a70ece5075c57844092f36ccfbd20
];


  
