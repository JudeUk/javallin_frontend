import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { Router, RouterModule } from '@angular/router';
import { AnalyticsComponent } from "../analytics/analytics.component";
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

const backend_url_production = 'https://legal-legal-vkjha.ondigitalocean.app/upload/'

@Component({
    selector: 'app-uploadpage',
    standalone: true,
    templateUrl: './uploadpage.component.html',
    styleUrl: './uploadpage.component.css',
    imports: [RouterModule, SidenavComponent, AnalyticsComponent]
})
export class UploadpageComponent {

    selectedFiles: { [key: string]: FileList | null } = {}; // Dictionary to store selected files

    constructor(private http: HttpClient,private dataService: DataService) { }
  
    onFileSelected(event: Event, key: string) {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        this.selectedFiles[key] = input.files;
      } else {
        this.selectedFiles[key] = null;  // Set back to null if no files selected
      }
    }
  
    uploadFiles() {
      const formData = new FormData();
      
      // Loop through each key in the selectedFiles dictionary
      for (const key in this.selectedFiles) {
        const files = this.selectedFiles[key];
        if (files) {
          // Append each file using the original key
          for (let i = 0; i < files.length; i++) {
            formData.append(key, files[i], files[i].name);
            // console.log('heeeyyyyyy')
          }
        }
      }
  
      this.http.post<any>(backend_url_production, formData)
        .subscribe(response => {
          console.log('Upload successful!', response);
          this.dataService.setUploadResponse(response);
          // Handle successful upload response
        }, error => {
          console.error('Upload failed:', error);
          // Handle upload error
        });
    }

    onSubmit(event: Event) {
        // Prevent default form submission behavior (refresh)
        event.preventDefault();
      
        // Call your method to handle file upload using FormData (existing logic)
        this.uploadFiles(); // Assuming you have a method named uploadFiles()
      }
}
