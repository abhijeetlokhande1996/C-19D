import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMakerComponent } from './table-maker.component';

describe('TableMakerComponent', () => {
  let component: TableMakerComponent;
  let fixture: ComponentFixture<TableMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
