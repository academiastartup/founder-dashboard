import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  public actionContextMenuClosed : boolean = true;
  public actionNotificationsMenuClosed : boolean = true;

 
  constructor() { }

  ngOnInit(): void {
  }

  toggleContextMenu() {
    this.actionContextMenuClosed = !this.actionContextMenuClosed;
  }

  toggleNotificationsMenu() {
    this.actionNotificationsMenuClosed = !this.actionNotificationsMenuClosed;
    this.actionContextMenuClosed = true;
  }


}
