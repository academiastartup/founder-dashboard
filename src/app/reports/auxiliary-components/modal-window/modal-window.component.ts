import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  @Input() modalWindowOpen : boolean = false;
  @Output() modalWindowClosedEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModalWindowEvent() {
    this.modalWindowClosedEvent.emit(null);
  }
  

}
