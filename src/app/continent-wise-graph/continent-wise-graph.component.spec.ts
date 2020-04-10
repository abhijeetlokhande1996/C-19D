import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentWiseGraphComponent } from './continent-wise-graph.component';

describe('ContinentWiseGraphComponent', () => {
  let component: ContinentWiseGraphComponent;
  let fixture: ComponentFixture<ContinentWiseGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentWiseGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentWiseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
