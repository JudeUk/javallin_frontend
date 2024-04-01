import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsightsComponent } from './insights/insights.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';


export const routes: Routes = [
    // {path: '', component: LandingpageComponent},
    {path:'dashboard', component: DashboardComponent},
    { path: 'insights', component: InsightsComponent },
    { path: 'upload', component: UploadpageComponent },
];


  
