import { Component, OnInit } from '@angular/core';
import { PythonService } from '../services/python.service';
import { IndiaDataService } from '../services/india-data.service';

@Component({
  selector: 'app-india-district',
  templateUrl: './india-district.component.html',
  styleUrls: ['./india-district.component.css'],
})
export class IndiaDistrictComponent implements OnInit {
  recordsForTable = {};
  statesArr = [];
  selectedState = null;
  cols = [];
  displayFlag = false;
  constructor(private pythonService: PythonService) {}

  ngOnInit(): void {
    this.cols = [
      {
        field: 'district',
        header: 'District',
      },
      {
        field: 'confirmed',
        header: 'Confirmed',
      },
    ];
    this.pythonService
      .getStateAndDistrictWiseData()
      .subscribe((data: Array<{}>) => {
        this.recordsForTable = {};
        for (const item of data) {
          const state = item['state'];
          this.statesArr.push(state);
          this.recordsForTable[state] = item['districtData'];
        }
        console.log(this.recordsForTable);
        this.selectedState = this.statesArr[0];
        this.displayFlag = true;
      });
  }
}
