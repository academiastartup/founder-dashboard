import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code-isert-modal-window',
  templateUrl: './code-insert-modal-window.component.html',
  styleUrls: ['./code-insert-modal-window.component.css']
})
export class CodeInsertModalWindowComponent implements OnInit {

  @Output() closeModalWindow = new EventEmitter<any>();

  constructor() { }

  closeModalWindowEvent() {
    this.closeModalWindow.emit(true);
  }

  ngOnInit(): void {
  }

}
