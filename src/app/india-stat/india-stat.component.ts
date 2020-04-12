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
        field: 'active',
        header: 'Active',
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
      .getIndianStateAndDistrictWiseData()
      .pipe(take(1))
      .subscribe((data) => {
        console.dir(data);
        const finalData = {};
        finalData['data'] = {};
        finalData['data']['regional'] = [];
        const stateListSorted: Array<string> = Object.keys(
          data['state_wise']
        ).sort();
        stateListSorted.forEach((stateName) => {
          const objToPush = {};
          objToPush['loc'] = stateName;
          objToPush['totalConfirmed'] =
            data['state_wise'][stateName]['confirmed'];
          objToPush['discharged'] = data['state_wise'][stateName]['recovered'];
          objToPush['deaths'] = data['state_wise'][stateName]['deaths'];
          objToPush['active'] = data['state_wise'][stateName]['active'];
          finalData['data']['regional'].push(objToPush);
        });
        this.indianData = finalData;
        if (this.selectedDisplay) {
          this.generateDataForTable(this.indianData);
        } else {
          this.generateIndianChart(this.indianData);
        }
      });
  }
  onChangeDisplay() {
    if (this.selectedDisplay) {
      this.generateDataForTable(this.indianData);
    } else {
      // graph
      this.generateIndianChart(this.indianData);
    }
  }
  generateDataForTable(data) {
    const mainData: Array<{}> = data['data']['regional'];

    this.recordsToDispplay = [];
    for (const item of mainData) {
      let mRate = (item['deaths'] / item['totalConfirmed']) * 100;
      mRate = Math.round(mRate);
      if (!item['totalConfirmed'] || Number.isNaN(mRate)) {
        mRate = 0;
      }

      this.recordsToDispplay.push({
        stateName: item['loc'],
        confirmed: item['totalConfirmed'],
        recovered: item['discharged'],
        deaths: item['deaths'],
        active: item['active'],
        mortalityRate: mRate + '%',
      });
    } // for
  }
  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  generateIndianChart(indianData) {
    // Define the colorVariations of the angular gauge
    const stateAndIdMapping = {
      'Andaman And Nicobar Islands': '001',
      'Andhra Pradesh': '002',
      'Arunachal Pradesh': '003',
      Assam: '004',
      Bihar: '005',
      Chandigarh: '006',
      Chhattisgarh: '007',
      'Dadra and Nagar Haveli': '008',
      'Daman and Diu': '009',
      Delhi: '010',
      Goa: '011',
      Gujarat: '012',
      Haryana: '013',
      'Himachal Pradesh': '014',
      'Jammu And Kashmir': '015',
      Jharkhand: '016',
      Karnataka: '017',
      Kerala: '018',
      Lakshadweep: '019',
      'Madhya Pradesh': '020',
      Maharashtra: '021',
      Manipur: '022',
      Meghalaya: '023',
      Mizoram: '024',
      Nagaland: '025',
      Odisha: '026',
      Puducherry: '027',
      Punjab: '028',
      Rajasthan: '029',
      Sikkim: '030',
      'Tamil Nadu': '031',
      Telangana: '036',
      Tripura: '032',
      'Uttar Pradesh': '033',
      Uttarakhand: '034',
      'West Bengal': '035',
    };
    const mainData: Array<{}> = indianData['data']['regional'];

    const dataset = [];
    for (const item of mainData) {
      if (item['loc'].toLowerCase() == 'telengana') {
        item['loc'] = 'Telangana';
      }
      let stateName: string = this.titleCase(item['loc']);
      const confirmed = item['totalConfirmed'];
      const active = item['active'];

      dataset.push({
        id: stateAndIdMapping[stateName],
        value: confirmed,
        tooltext: `Confirmed : ${confirmed} {br} Active : ${active} {br} Recovered: ${item['discharged']} {br} Deaths: ${item['deaths']}`,
      });
    }

    const colorRange = {
      minvalue: '0',
      code: '#FFE0B2',
      gradient: '1',
      color: [
        {
          minvalue: '0',
          maxvalue: '100',
          code: '#D0DFA3',
        },

        {
          minvalue: '500',
          maxvalue: '1000',
          code: '#91AF64',
        },
        {
          minvalue: '1000',
          maxvalue: '5000',
          code: '#A9FF8D',
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
      data: dataset,
    }; // end of this.dataSource
  } // end
}
