import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private uploadResponse = new BehaviorSubject<any>(null); // BehaviorSubject to store response

  setUploadResponse(data: any) {
    this.uploadResponse.next(data);
  }

  getUploadResponse() {
    return this.uploadResponse.asObservable();
  }
}
