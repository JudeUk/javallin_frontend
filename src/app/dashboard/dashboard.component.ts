import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsightsComponent } from '../insights/insights.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InsightsComponent,RouterModule,HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {

  constructor(private http: HttpClient) {}
  caseFile : any;

getFile(event: any) {

this.caseFile = event.target.files[0];
console.log('file has been uploaded>>>>>>>',this.caseFile)

}

  

  uploadFile() {

    const formData = new FormData();
    formData.set('file', this.caseFile);
    
    return this.http.post('http://127.0.0.1:8000/upload/', formData).subscribe((response) => {});
  }

}
