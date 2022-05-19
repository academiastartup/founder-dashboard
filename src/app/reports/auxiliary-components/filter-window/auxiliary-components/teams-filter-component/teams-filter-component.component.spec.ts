import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsFilterComponentComponent } from './teams-filter-component.component';

describe('TeamsFilterComponentComponent', () => {
  let component: TeamsFilterComponentComponent;
  let fixture: ComponentFixture<TeamsFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsFilterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
