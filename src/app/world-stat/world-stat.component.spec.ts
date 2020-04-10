import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldStatComponent } from './world-stat.component';

describe('WorldStatComponent', () => {
  let component: WorldStatComponent;
  let fixture: ComponentFixture<WorldStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
