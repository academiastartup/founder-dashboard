import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openModalWindow : {open : boolean, label : string} = {open : false, label : ''};

  constructor() { }

  ngOnInit(): void {
  }

  toggleModalWindow(label : string) {
    debugger
    if (label != '') {
      this.openModalWindow.open = !this.openModalWindow.open;
      this.openModalWindow.label = label;
    } else {
      this.openModalWindow.open = !this.openModalWindow.open;
    }
  }

  closeModalWindow() {
    this.openModalWindow.open = false;
  }

}
