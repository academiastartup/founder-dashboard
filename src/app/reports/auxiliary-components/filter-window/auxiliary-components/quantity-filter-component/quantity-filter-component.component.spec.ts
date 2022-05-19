import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityFilterComponentComponent } from './quantity-filter-component.component';

describe('QuantityFilterComponentComponent', () => {
  let component: QuantityFilterComponentComponent;
  let fixture: ComponentFixture<QuantityFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityFilterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
