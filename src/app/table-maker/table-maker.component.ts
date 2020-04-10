import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-maker',
  templateUrl: './table-maker.component.html',
  styleUrls: ['./table-maker.component.css'],
})
export class TableMakerComponent implements OnInit {
  @Input('cols') cols;
  @Input('finalArrayToDisplay') finalArrayToDisplay;
  @Input('totalRecords') totalRecords;

  constructor() {}

  ngOnInit(): void {}
}
