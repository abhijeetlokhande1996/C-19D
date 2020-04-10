import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CovidData } from '../models/covid-data';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  private covidData = new CovidData();
  private subject = new BehaviorSubject(this.covidData);
  constructor() {}
  setCovidData(model: CovidData) {
    this.covidData = model;
    this.subject.next(this.covidData);
  }
  getCovidData() {
    return this.subject.asObservable();
  }
}
