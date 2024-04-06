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


  // casesWithSimilarFacts: number = 105;
  // casesWithSimilarArguments: number = 50;
  // casesWhereSucceeded: number = 10;


  constructor(private http: HttpClient,private dataService: DataService) {}
  caseFile : any;
  formData = new FormData();
  getFile(event: any) {

this.caseFile = event.target.files[0];

  

  // Extract button label for differentiation
  // const buttonLabel = event.target.parentElement.textContent.trim();
  const buttonLabel = event.target.parentElement.querySelector('label').textContent.trim();

  // Append selected file based on button label
  switch (buttonLabel) {

    case '+ Upload facts of Case':
      this.formData.append('facts of case', this.caseFile, this.caseFile.name);
      break;
    case '+ Upload Case Issues':
      this.formData.append('issues', this.caseFile, this.caseFile.name);
      break;
    case '+ Upload Case Arguments':
      this.formData.append('arguments', this.caseFile, this.caseFile.name);
      break;
    case '+ Upload Reference Material':
      this.formData.append('reference material', this.caseFile, this.caseFile.name);
      break;
    default:
      console.warn('Unexpected button label:', buttonLabel);
  }

}

  

//   uploadFile() {

//     // const formData = new FormData();
//     // formData.set('file', this.caseFile);
    
//     this.dataService.dataToPass = {
//       casesWithSimilarFacts: 105,
//       casesWithSimilarArguments: 50,
//       casesWhereSucceeded: 10
//   }
//     return this.http.post('http://127.0.0.1:8000/upload/', this.formData).subscribe((response) => {});

 

// }


uploadFile() {
  this.http.post<any>(backend_url_production, this.formData).subscribe(
    (response) => {
      // Update dataToPass variables with response data
      console.log(">>>>>>>>>>>>>> this is the response from backend " + response.case_numbers + response.texts)

      // this.dataService.dataToPass = {
      //   casesWithSimilarFacts: response.case_numbers,
      //   casesWithSimilarArguments: response.casesWithSimilarArguments,
      //   casesWhereSucceeded: response.casesWhereSucceeded
      // };

      this.dataService.setSimilarFiles(response)

    },
    (error) => {
      // Handle error if needed
      console.error('Error occurred:', error);
    }
  );
}


}
