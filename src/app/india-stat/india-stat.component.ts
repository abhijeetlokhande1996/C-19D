import { Component, OnInit } from '@angular/core';
import { PythonService } from '../services/python.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-india-stat',
  templateUrl: './india-stat.component.html',
  styleUrls: ['./india-stat.component.css'],
})
export class IndiaStatComponent implements OnInit {
  selectedDisplay: number = 0;
  displayType = ['graph', 'table'];
  cols = [];
  recordsToDispplay = [];
  indianData = {};
  dataSource: Object = {};

  constructor(private pythonService: PythonService) {}

  ngOnInit(): void {
    this.cols = [
      {
        field: 'stateName',
        header: 'State',
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
    this.pythonService
      .getIndiaStat()
      .pipe(take(1))
      .subscribe((data) => {
        if (data['success']) {
          this.indianData = data;
          if (this.selectedDisplay) {
            this.generateDataForTable(data);
          } else {
            this.generateIndianChart();
          }
        }
      });
  }
  onChangeDisplay() {
    if (this.selectedDisplay) {
      this.generateDataForTable(this.indianData);
    } else {
      // graph
      this.generateIndianChart();
    }
  }
  generateDataForTable(data) {
    const mainData: Array<{}> = data['data']['regional'];
    console.log(mainData);
    this.recordsToDispplay = [];
    for (const item of mainData) {
      let mRate = (item['deaths'] / item['totalConfirmed']) * 100;
      mRate = Math.round(mRate);
      if (!item['totalConfirmed']) {
        mRate = 0;
      }
      this.recordsToDispplay.push({
        stateName: item['loc'],
        confirmed: item['totalConfirmed'],
        recovered: item['discharged'],
        deaths: item['deaths'],
        mortalityRate: mRate + '%',
      });
    } // for
  }

  generateIndianChart() {
    // Define the colorVariations of the angular gauge
    const dataset = [
      {
        id: 'MA',
        value: '950',
        showLabel: '1',
      },
    ];

    const colorRange = {
      minvalue: '0',
      code: '#FFE0B2',
      gradient: '1',
    };

    this.dataSource = {
      chart: {
        caption: 'State Wise Stats',
        theme: 'fusion',
        formatNumberScale: '0',
        includeValueInLabels: '1',
        labelSepChar: ': ',
        useSNameInToolTip: '0',
      },
      // Aesthetics; ranges synced with the slider
      colorrange: colorRange,
      // Source data as JSON --> id represents countries of the world.
      data: dataset,
    }; // end of this.dataSource
  } // end
}
