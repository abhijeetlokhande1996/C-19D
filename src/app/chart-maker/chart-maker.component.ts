import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-maker',
  templateUrl: './chart-maker.component.html',
  styleUrls: ['./chart-maker.component.css'],
})
export class ChartMakerComponent implements OnInit {
  @Input('chartType') chartType: string;
  @Input('chartData') chartData: {};
  @Input('chartOptions') chartOptions: {};
  constructor() {}

  ngOnInit(): void {}
}
