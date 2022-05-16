import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTeamsComponent } from './pay-teams.component';

describe('PayTeamsComponent', () => {
  let component: PayTeamsComponent;
  let fixture: ComponentFixture<PayTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
