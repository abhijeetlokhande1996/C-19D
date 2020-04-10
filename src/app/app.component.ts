import { Component, OnInit } from '@angular/core';
import { PythonService } from './services/python.service';
import { take } from 'rxjs/operators';
import { CovidDataService } from './services/covid-data.service';
import { CovidData } from './models/covid-data';
import { ContinentCountryService } from './services/continent-country.service';
import { ContinentCountryMapping } from './models/continent-country-mapping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Covid19Dashboard';
  constructor(
    private pythonService: PythonService,
    private covidDataService: CovidDataService,
    private continentCountryService: ContinentCountryService
  ) {}
  ngOnInit(): void {
    this.pythonService
      .getAggredatedData()
      .pipe(take(1))
      .subscribe((aggData) => {
        const covidDataModel = new CovidData();
        covidDataModel.aggData = aggData;

        this.covidDataService.setCovidData(covidDataModel);
      });
    this.pythonService
      .getCountryRegionMappingData()
      .pipe(take(1))
      .subscribe((data) => {
        const model = new ContinentCountryMapping();
        model.mapping = data;
        this.continentCountryService.setContinentCountryModel(model);
      });
  }
}
