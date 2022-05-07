import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfReportsComponent } from './table-of-reports.component';

describe('TableOfReportsComponent', () => {
  let component: TableOfReportsComponent;
  let fixture: ComponentFixture<TableOfReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
