import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../services/covid-data.service';
import { CovidData } from '../models/covid-data';

@Component({
  selector: 'app-quick-fact',
  templateUrl: './quick-fact.component.html',
  styleUrls: ['./quick-fact.component.css'],
})
export class QuickFactComponent implements OnInit {
  totalConfirmCases: number = 0;
  totalRecoverCases: number = 0;
  totalDeathCases: number = 0;
  totalCriticalCases: number = 0;
  constructor(private covidDataService: CovidDataService) {}

  ngOnInit(): void {
    this.covidDataService.getCovidData().subscribe((covidData: CovidData) => {
      this.totalConfirmCases = 0;
      Object.keys(covidData.aggData).forEach((countryName) => {
        this.totalConfirmCases += covidData.aggData[countryName]['confirmed'];
        this.totalRecoverCases += covidData.aggData[countryName]['recovered'];
        this.totalDeathCases += covidData.aggData[countryName]['deaths'];
        this.totalCriticalCases += covidData.aggData[countryName]['critical'];
      });
    });
  }
}
