import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { PythonService } from '../services/python.service';
import { CovidDataService } from '../services/covid-data.service';
import { CovidData } from '../models/covid-data';
import { Subscription } from 'rxjs';

export interface AggregatedData {
  countryName: string;
  confirmed: number;
  recovered: number;
  deaths: number;
  mortalityRate: number;
  id: number;
}
@Component({
  selector: 'app-world-stat',
  templateUrl: './world-stat.component.html',
  styleUrls: ['./world-stat.component.css'],
})
export class WorldStatComponent implements OnInit, OnDestroy {
  finalArrayToDisplay = [];
  totalRecords: number = 0;
  covidDataSubscription = new Subscription();
  cols = [];
  constructor(private covidDataService: CovidDataService) {}

  ngOnInit(): void {
    this.cols = [
      {
        field: 'id',
        header: 'Sr No.',
      },
      {
        field: 'countryName',
        header: 'Country',
      },
      {
        field: 'confirmed',
        header: 'Confirmed',
      },
      {
        field: 'recovered',
        header: 'Recovered',
      },
      {
        field: 'deaths',
        header: 'Deaths',
      },
      {
        field: 'critical',
        header: 'Critical',
      },
      {
        field: 'mortalityRate',
        header: 'Mortality Rate',
      },
    ];
    this.covidDataSubscription = this.covidDataService
      .getCovidData()
      .subscribe((covidDataModel: CovidData) => {
        console.log(covidDataModel);
        const data = covidDataModel.aggData;
        Object.keys(data).forEach((countryName, idx) => {
          let mRate =
            (data[countryName]['deaths'] /
              (data[countryName]['confirmed'] +
                data[countryName]['recovered'] +
                data[countryName]['deaths'] +
                data[countryName]['critical'])) *
            100;
          if (Number.isNaN(mRate)) {
            mRate = 0;
          }
          mRate = Math.floor(mRate);

          this.finalArrayToDisplay.push({
            id: idx + 1,
            countryName: countryName,
            confirmed: data[countryName]['confirmed'],
            recovered: data[countryName]['recovered'],
            deaths: data[countryName]['deaths'],
            critical: data[countryName]['critical'],
            mortalityRate: mRate + '%',
          });
        });
        this.totalRecords = this.finalArrayToDisplay.length;
      });
  } // ngOnInit
  ngOnDestroy(): void {
    this.covidDataSubscription.unsubscribe();
  }
}
