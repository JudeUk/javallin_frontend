import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsightsComponent } from '../insights/insights.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { DataService } from "../data.service"

const backend_url_local = 'http://127.0.0.1:8000/upload/'

const backend_url_production_old = 'https://legallens-backend-deployment.onrender.com/upload/'

const backend_url_production = 'https://legal-legal-vkjha.ondigitalocean.app/upload/'

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [InsightsComponent, RouterModule, HttpClientModule, SidenavComponent]
})



export class DashboardComponent {


 }
