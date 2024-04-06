import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [SidenavComponent,CommonModule],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {

  casesWithSimilarFacts: number = 0;
  casesWithSimilarArguments: number = 0;
  casesWhereSucceeded: number = 0;

  similarFiles : any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Retrieve data from the DataService
    // const data = this.dataService.dataToPass;

this.dataService.similarFiles.subscribe(files => this.similarFiles = files)

console.log(">>>>>>>>>>>>>>THIS IS THE Similarfile field"+ this.similarFiles)
    // if (data) {
    //   this.casesWithSimilarFacts = data.casesWithSimilarFacts;
    //   this.casesWithSimilarArguments = data.casesWithSimilarArguments;
    //   this.casesWhereSucceeded = data.casesWhereSucceeded;
    // }
  }

}
