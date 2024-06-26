import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface SearchResult {
  case_number: string; 
  case_title: string; 
  court : string
  date : string;
}

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [SidenavComponent, CommonModule,FormsModule]
})
export class SearchComponent implements OnInit {
  

  searchTitle : string = '';
  // searchResults: SearchResult[] = []
  searchResults: any;
  error: string | null = null;
  isLoadingData: boolean = true;


  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  onSubmit() {
    this.onSearch();
  }

  onSearch() {
    console.log('heeey')
    const case_title = this.searchTitle.trim()
    
        this.http.post<any>('https://legal-legal-vkjha.ondigitalocean.app/case_search/', { case_title: case_title })
        // this.http.post<any>('http://127.0.0.1:8000/case_search/', { case_title: case_title })
        
      .subscribe(results => {
        this.searchResults = results;
        this.isLoadingData = false;
      }, error => {
        this.error = error.message || 'An error occurred during search.'; // Handle error message
      });
    this.searchTitle = ''
    console.log(this.searchResults)
        
  }

}