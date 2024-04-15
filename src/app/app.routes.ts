import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsightsComponent } from './insights/insights.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { QuerypageComponent } from './querypage/querypage.component';


export const routes: Routes = [
    {path: '', component: LandingpageComponent},
    {path:'dashboard', component: DashboardComponent},
    { path: 'insights', component: InsightsComponent },
    { path: 'upload', component: UploadpageComponent },
    { path: 'chatbox', component: ChatboxComponent },
    { path: 'querypage', component: QuerypageComponent},
];


  
