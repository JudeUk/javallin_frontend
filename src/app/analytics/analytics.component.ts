import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { DataService } from '../data.service';

@Component({
    selector: 'app-analytics',
    standalone: true,
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.css',
    imports: [SidenavComponent]
})
export class AnalyticsComponent implements OnInit {
    uploadResponse: any;
  
    constructor(private dataService: DataService) { }
  
    ngOnInit() {
      this.dataService.getUploadResponse().subscribe(response => {
        this.uploadResponse = response;
      });
    }
  }
