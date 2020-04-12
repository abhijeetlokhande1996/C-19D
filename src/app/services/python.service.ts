import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import configJson from './../../assets/config.json';
@Injectable({
  providedIn: 'root',
})
export class PythonService {
  url = configJson.pythonUrl;
  constructor(private http: HttpClient) {}
  incrementCount() {
    this.http.get(`${this.url}`).subscribe();
  }
  getAggredatedData() {
    return this.http.get(`${this.url}/getAggregatedCsv`);
  }
  getCountryRegionMappingData() {
    return this.http.get(`${this.url}/getCountryRegionMapping`);
  }
  getIndiaStat() {
    return this.http.get(`https://api.rootnet.in/covid19-in/stats/latest`);
  }
}
