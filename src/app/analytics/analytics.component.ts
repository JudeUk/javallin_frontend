import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-analytics',
    standalone: true,
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.css',
    imports: [SidenavComponent,CommonModule]
})
export class AnalyticsComponent implements OnInit {
    uploadResponse: any;
    items: any[] = [];
    isLoadingData: boolean = true;
  
    constructor(private dataService: DataService) { }
  
    ngOnInit() {

    }

    fetchData(){
      this.dataService.getUploadResponse().subscribe(response => {
        this.uploadResponse = response;
        this.items = this.uploadResponse.data.slice(1);
        this.isLoadingData = false;
      });
    }
  }
