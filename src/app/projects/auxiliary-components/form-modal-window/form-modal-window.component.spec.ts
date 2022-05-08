import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalWindowComponent } from './form-modal-window.component';

describe('FormModalWindowComponent', () => {
  let component: FormModalWindowComponent;
  let fixture: ComponentFixture<FormModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModalWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
