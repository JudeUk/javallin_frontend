import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [SidenavComponent, CommonModule]
})
export class SearchComponent {
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