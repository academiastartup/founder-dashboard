import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFromSearchResultComponent } from './page-from-search-result.component';

describe('PageFromSearchResultComponent', () => {
  let component: PageFromSearchResultComponent;
  let fixture: ComponentFixture<PageFromSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFromSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFromSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
