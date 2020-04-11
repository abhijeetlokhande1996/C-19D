import { Component, OnInit } from '@angular/core';
import { ContinentCountryService } from '../services/continent-country.service';
import { exhaustMap } from 'rxjs/operators';
import { CovidDataService } from '../services/covid-data.service';
import { CovidData } from '../models/covid-data';
import { ContinentCountryMapping } from '../models/continent-country-mapping';

export interface DataForTable {
  countryName: string;
  confirmed: number;
  recovered: number;
  deaths: number;
  mortalityRate: string;
}
@Component({
  selector: 'app-continent-wise-stat',
  templateUrl: './continent-wise-graph.component.html',
  styleUrls: ['./continent-wise-graph.component.css'],
})
export class ContinentWiseStatComponent implements OnInit {
  displayFlag = false;
  regionList = [];
  finalDataShow = {};
  selectedRegion: string = null;
  chartData;
  chartType;
  chartOptions;

  paramList = ['confirmed', 'recovered', 'deaths'];
  displayTypes = ['graph', 'table'];
  selectedParam = this.paramList[0];
  selectedDisplay: number = 1;

  recordsForTable = [];
  totalRecordsOfTable: number = 0;
  cols = [];
  constructor(
    private ccmService: ContinentCountryService,
    private covidDataService: CovidDataService
  ) {}
  ngOnInit(): void {
    this.cols = [
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
        field: 'mortalityRate',
        header: 'Mortality Rate',
      },
    ];
    this.covidDataService.getCovidData().subscribe((dataC: CovidData) => {
      this.ccmService
        .getContinentCountryModel()
        .subscribe((regionCountry: ContinentCountryMapping) => {
          const fCountries: Array<string> = Object.keys(dataC.aggData);

          Object.keys(regionCountry.mapping).forEach((rName) => {
            const countryList: Array<string> = regionCountry.mapping[rName];

            for (const countryName of countryList) {
              for (const fCountry of fCountries) {
                if (countryName.toLowerCase() == fCountry.toLowerCase()) {
                  if (!this.finalDataShow[rName]) {
                    this.finalDataShow[rName] = [];
                  }
                  this.finalDataShow[rName].push({
                    countryName: fCountry,
                    confirmed: dataC.aggData[fCountry]['confirmed'],
                    recovered: dataC.aggData[fCountry]['recovered'],
                    deaths: dataC.aggData[fCountry]['deaths'],
                  });
                }
              }
            }
          });

          this.regionList = Object.keys(this.finalDataShow);
          this.selectedRegion = this.regionList[0];

          if (!this.selectedDisplay) {
            try {
              this.generateChartData(
                'line',
                this.finalDataShow[this.selectedRegion],
                this.selectedParam
              );
              this.displayFlag = true;
            } catch {
              try {
                setTimeout(() => {
                  this.generateChartData(
                    'line',
                    this.finalDataShow[this.selectedRegion],
                    this.selectedParam
                  );
                }, 500);
                this.displayFlag = true;
              } catch {
                this.displayFlag = false;
              }
            }
          } else {
            try {
              this.generateTableData(this.finalDataShow[this.selectedRegion]);
              this.displayFlag = true;
            } catch {
              try {
                setTimeout(() => {
                  this.generateTableData(
                    this.finalDataShow[this.selectedRegion]
                  );
                }, 500);
                this.displayFlag = true;
              } catch {
                this.displayFlag = false;
              }
            }
          }
        });
    });
  }

  onChangeParam() {
    if (!this.selectedDisplay) {
      this.generateChartData(
        'line',
        this.finalDataShow[this.selectedRegion],
        this.selectedParam
      );
    } else {
      // call to table
    }
  }
  onChangeRegion() {
    if (!this.selectedDisplay) {
      this.generateChartData(
        'line',
        this.finalDataShow[this.selectedRegion],
        this.selectedParam
      );
    } else {
      // call to table
      this.generateTableData(this.finalDataShow[this.selectedRegion]);
    }
  }
  onChangeDisplay() {
    if (!this.selectedDisplay) {
      this.generateChartData(
        'line',
        this.finalDataShow[this.selectedRegion],
        this.selectedParam
      );
    } else {
      this.generateTableData(this.finalDataShow[this.selectedRegion]);
    }
  }
  generateTableData(raw_data: Array<{}>) {
    this.recordsForTable = [];
    for (const item of raw_data) {
      let mRate =
        (item['deaths'] /
          (item['confirmed'] + item['recovered'] + item['deaths'])) *
        100;
      mRate = Math.floor(mRate);

      this.recordsForTable.push({
        countryName: item['countryName'],
        confirmed: item['confirmed'],
        recovered: item['recovered'],
        deaths: item['deaths'],
        mortalityRate: mRate + '%',
      });
    }
  }
  generateChartData(type: string, raw_data: Array<{}>, param: string) {
    if (!raw_data || raw_data.length == 0) return;
    const labels = [];
    const data = [];
    const backgroundColor = [];

    raw_data.forEach((item) => {
      labels.push(item['countryName']);

      data.push(item[param]);
      backgroundColor.push(
        '#' + ((Math.random() * 0xffffff) << 0).toString(16)
      );
    });
    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: `${this.selectedParam.toUpperCase()} Cases`,
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 12,
          minBarLength: 2,
          backgroundColor: backgroundColor,
          data: data,
        },
      ],
    };
    this.chartType = type;

    this.chartOptions = {
      title: {
        display: false,
        fontSize: 16,
      },
      legend: {
        position: 'top',
      },
    };
  }
}
