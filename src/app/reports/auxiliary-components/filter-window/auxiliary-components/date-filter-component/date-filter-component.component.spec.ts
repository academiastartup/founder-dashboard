import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFilterComponentComponent } from './date-filter-component.component';

describe('DateFilterComponentComponent', () => {
  let component: DateFilterComponentComponent;
  let fixture: ComponentFixture<DateFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFilterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
