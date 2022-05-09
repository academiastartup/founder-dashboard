import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-modal-window',
  templateUrl: './edit-modal-window.component.html',
  styleUrls: ['./edit-modal-window.component.css']
})
export class EditModalWindowComponent implements OnInit {

  @Input() modalWindowOpen : boolean = false;
  @Output() modalWindowClosedEvent = new EventEmitter<any>();

  constructor() { }

  closeModalWindowEvent() {
    this.modalWindowClosedEvent.emit(null);
  }

  ngOnInit(): void {
  }

}
