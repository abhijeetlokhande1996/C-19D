import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import configJson from './../../assets/config.json';
@Injectable({
  providedIn: 'root',
})
export class PythonService {
  url = configJson.pythonUrl;
  constructor(private http: HttpClient) {}

  getAggredatedData() {
    return this.http.get(`${this.url}/getAggregatedCsv`);
  }
  getCountryRegionMappingData() {
    return this.http.get(`${this.url}/getCountryRegionMapping`);
  }
}
