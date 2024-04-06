import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
    selector: 'app-analytics',
    standalone: true,
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.css',
    imports: [SidenavComponent]
})
export class AnalyticsComponent {

}
