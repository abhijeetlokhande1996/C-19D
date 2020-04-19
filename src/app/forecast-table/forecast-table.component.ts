import { Component, OnInit } from '@angular/core';
import forecast from './../../assets/forecast.json';
@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css'],
})
export class ForecastTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(forecast);
  }
}
