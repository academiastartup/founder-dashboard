import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFilterComponentComponent } from './password-filter-component.component';

describe('PasswordFilterComponentComponent', () => {
  let component: PasswordFilterComponentComponent;
  let fixture: ComponentFixture<PasswordFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordFilterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
