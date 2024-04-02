import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {

  casesWithSimilarFacts: number = 0;
  casesWithSimilarArguments: number = 0;
  casesWhereSucceeded: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Retrieve data from the DataService
    const data = this.dataService.dataToPass;
    if (data) {
      this.casesWithSimilarFacts = data.casesWithSimilarFacts;
      this.casesWithSimilarArguments = data.casesWithSimilarArguments;
      this.casesWhereSucceeded = data.casesWhereSucceeded;
    }
  }

}
