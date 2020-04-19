import { Component, OnInit } from '@angular/core';
import forecast from './../../assets/forecast.json';
@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css'],
})
export class ForecastTableComponent implements OnInit {
  forecastArr = [];
  constructor() {}

  ngOnInit(): void {
    Object.keys(forecast).forEach((key: string) => {
      const keySplit: Array<string> = key.split('-');
      const day = parseInt(keySplit[0]);
      const month = parseInt(keySplit[1]);
      const year = parseInt(keySplit[2]);

      this.forecastArr.push([
        new Date(year, month, day).toString(),
        forecast[key],
      ]);
    });
    console.log(this.forecastArr);
  }
}
