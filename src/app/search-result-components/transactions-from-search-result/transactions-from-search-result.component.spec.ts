import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFromSearchResultComponent } from './transactions-from-search-result.component';

describe('TransactionsFromSearchResultComponent', () => {
  let component: TransactionsFromSearchResultComponent;
  let fixture: ComponentFixture<TransactionsFromSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsFromSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFromSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
