import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private similarFilesSource = new BehaviorSubject<any[]>([]);
  similarFiles = this.similarFilesSource.asObservable();

  setSimilarFiles(files: any[]) {
    this.similarFilesSource.next(files);
  }

  constructor() { }
}
