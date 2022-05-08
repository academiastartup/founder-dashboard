import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-form-modal-window',
  templateUrl: './form-modal-window.component.html',
  styleUrls: ['./form-modal-window.component.css']
})
export class FormModalWindowComponent implements OnInit {

  @Input() modalWindowOpen : boolean = false;
  @Output() modalWindowClosedEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModalWindowEvent() {
    this.modalWindowClosedEvent.emit(null);
  }

}
