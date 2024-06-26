import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { QuerypageComponent } from './querypage/querypage.component';
import { SearchComponent } from './search/search.component';


export const routes: Routes = [
    {path: '', component: LandingpageComponent},
    { path: 'uploadfiles', component: UploadpageComponent },
    { path: 'login', component: LoginpageComponent },
    { path: 'signup', component: RegistrationpageComponent },
    {path: 'analytics',component:AnalyticsComponent},
    { path: 'upload', component: UploadpageComponent },
    { path: 'chatbox', component: ChatboxComponent },
    { path: 'querypage', component: QuerypageComponent},
    { path: 'search', component: SearchComponent},
];


  
