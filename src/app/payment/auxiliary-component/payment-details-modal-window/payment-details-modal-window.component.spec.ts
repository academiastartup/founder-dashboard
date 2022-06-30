import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailsModalWindowComponent } from './payment-details-modal-window.component';

describe('PaymentDetailsModalWindowComponent', () => {
  let component: PaymentDetailsModalWindowComponent;
  let fixture: ComponentFixture<PaymentDetailsModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDetailsModalWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailsModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
