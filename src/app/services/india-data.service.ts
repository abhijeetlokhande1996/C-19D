import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IndiaDataService {
  private subject = new BehaviorSubject({});
  constructor() {}
  setIndiaData(data: {}) {
    this.subject.next(data);
  }
  getIndiaData() {
    return this.subject.asObservable();
  }
}
