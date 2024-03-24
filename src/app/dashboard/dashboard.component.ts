import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsightsComponent } from '../insights/insights.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InsightsComponent,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
