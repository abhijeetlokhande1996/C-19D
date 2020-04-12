import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css'],
})
export class TopNavBarComponent implements OnInit {
  @Output() idChanges = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onClickLink(id: string) {
    this.idChanges.emit(id);
  }
}
