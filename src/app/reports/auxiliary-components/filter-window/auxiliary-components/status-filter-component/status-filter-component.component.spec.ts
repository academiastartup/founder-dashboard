import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFilterComponentComponent } from './status-filter-component.component';

describe('StatusFilterComponentComponent', () => {
  let component: StatusFilterComponentComponent;
  let fixture: ComponentFixture<StatusFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusFilterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
