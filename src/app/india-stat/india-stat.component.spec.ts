import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaStatComponent } from './india-stat.component';

describe('IndiaStatComponent', () => {
  let component: IndiaStatComponent;
  let fixture: ComponentFixture<IndiaStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
