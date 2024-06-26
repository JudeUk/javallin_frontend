import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  setSimilarFiles(response: any) {
    throw new Error('Method not implemented.');
  }
  private uploadResponse = new BehaviorSubject<any>(null); // BehaviorSubject to store response

  setUploadResponse(data: any) {
    this.uploadResponse.next(data);
    console.log('data set')
  }

  getUploadResponse() {
    return this.uploadResponse.asObservable();
  }
}
