import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInsertModalWindowComponent } from './code-insert-modal-window.component';

describe('CodeInsertModalWindowComponent', () => {
  let component: CodeInsertModalWindowComponent;
  let fixture: ComponentFixture<CodeInsertModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeInsertModalWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeInsertModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
