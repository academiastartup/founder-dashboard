import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFromSearchResultComponent } from './user-from-search-result.component';

describe('UserFromSearchResultComponent', () => {
  let component: UserFromSearchResultComponent;
  let fixture: ComponentFixture<UserFromSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFromSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFromSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
