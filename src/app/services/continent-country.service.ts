import { Injectable } from '@angular/core';
import { ContinentCountryMapping } from '../models/continent-country-mapping';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContinentCountryService {
  private continentCountryModel = new ContinentCountryMapping();
  private subject = new BehaviorSubject(this.continentCountryModel);
  constructor() {}
  setContinentCountryModel(model: ContinentCountryMapping) {
    this.continentCountryModel = model;
    this.subject.next(this.continentCountryModel);
  }
  getContinentCountryModel() {
    return this.subject.asObservable();
  }
}
