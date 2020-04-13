import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  Inject,
} from '@angular/core';
import { PythonService } from './services/python.service';
import { take } from 'rxjs/operators';
import { CovidDataService } from './services/covid-data.service';
import { CovidData } from './models/covid-data';
import { ContinentCountryService } from './services/continent-country.service';
import { ContinentCountryMapping } from './models/continent-country-mapping';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { IndiaDataService } from './services/india-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Covid19Dashboard';
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(
    private pythonService: PythonService,
    private covidDataService: CovidDataService,
    private continentCountryService: ContinentCountryService,
    private indiaDatasService: IndiaDataService
  ) {}

  ngOnInit(): void {
    this.pythonService.incrementCount();
    this.pythonService.getIndianStateAndDistrictWiseData().subscribe((data) => {
      this.indiaDatasService.setIndiaData(data);
    });
    this.pythonService
      .getAggredatedData()

      .subscribe((aggData) => {
        const covidDataModel = new CovidData();
        covidDataModel.aggData = aggData;

        this.covidDataService.setCovidData(covidDataModel);
      });
    this.pythonService
      .getCountryRegionMappingData()

      .subscribe((data) => {
        const model = new ContinentCountryMapping();
        model.mapping = data;

        this.continentCountryService.setContinentCountryModel(model);
      });
  }
  @HostListener('window:scroll')
  checkScroll() {
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  getIdFromTopNavBar(id: string) {}
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
