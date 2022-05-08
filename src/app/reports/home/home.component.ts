import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openModalWindow : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModalWindow() {
    this.openModalWindow = !this.openModalWindow;
  }

}
