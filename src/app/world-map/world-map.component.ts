import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../services/covid-data.service';
import { CovidData } from '../models/covid-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css'],
})
export class WorldMapComponent implements OnInit {
  dataSource: Object = {};

  countryIdMapping = {};
  dataset = [];
  constructor(
    private covidDataService: CovidDataService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('/assets/country-id-mapping.json').subscribe((resp) => {
      Object.keys(resp).forEach((countryName) => {
        this.countryIdMapping[countryName] = resp[countryName];
      });
      this.covidDataService.getCovidData().subscribe((data: CovidData) => {
        console.log('World Map');
        this.dataset = [];
        Object.keys(data.aggData).forEach((countryName) => {
          const confirmed = data.aggData[countryName]['confirmed'];
          const recovered = data.aggData[countryName]['recovered'];
          const deaths = data.aggData[countryName]['deaths'];
          const critical = data.aggData[countryName]['critical'];
          this.dataset.push({
            id: this.countryIdMapping[countryName],
            value: confirmed,
            tooltext: `Confirmed : ${confirmed} {br}  Recovered: ${recovered} {br} Critical: ${critical} {br} Deaths: ${deaths}`,
          });
        });

        const colorRange = {
          minvalue: '0',
          code: '#FFA07A',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '10000',
              code: '#E9967A',
            },

            {
              minvalue: '10001',
              maxvalue: '30000',
              code: '#CD5C5C',
            },
            {
              minvalue: '30000',
              maxvalue: '1000000',
              code: '#d9534f',
            },
          ],
        };

        this.dataSource = {
          chart: {
            caption: 'State Wise Stats',
            theme: 'fusion',
            formatNumberScale: '0',
            thousandSeparator: ',',
            thousandSeparatorPosition: '2,3',
            showLabels: '1',
            useSNameInLabels: '0',
            labelSepChar: ': ',
            includeValueInLabels: '1',
            useSNameInToolTip: '0',
          },
          // Aesthetics; ranges synced with the slider
          colorrange: colorRange,
          // Source data as JSON --> id represents countries of the world.
          data: this.dataset,
        }; // end of this.dataSource
      });
    });
  }
}
