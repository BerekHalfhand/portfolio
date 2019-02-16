import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainyDayComponent } from './rainy-day.component';

describe('RainyDayComponent', () => {
  let component: RainyDayComponent;
  let fixture: ComponentFixture<RainyDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainyDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
