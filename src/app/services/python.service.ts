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
  getIndianStateAndDistrictWiseData() {
    return this.http.get(
      `https://corona-virus-world-and-india-data.p.rapidapi.com/api_india`,
      {
        headers: {
          'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
          'x-rapidapi-key':
            '297c7f49b8mshbe42867157733dap15a767jsn6d9220c33424',
        },
      }
    );
  }
}
