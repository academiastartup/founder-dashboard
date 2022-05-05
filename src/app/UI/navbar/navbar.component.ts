import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public actionMenuClosed : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActionMenu() {
    this.actionMenuClosed = !this.actionMenuClosed;
  }
}
