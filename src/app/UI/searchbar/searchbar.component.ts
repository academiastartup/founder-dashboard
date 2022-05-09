import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  public actionContextMenuClosed : boolean = true;
  public actionNotificationsMenuClosed : boolean = true;
  public dataReadyToShow : boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataReadyToShow = true;
    }, 2000);
  }

  toggleContextMenu() {
    this.actionContextMenuClosed = !this.actionContextMenuClosed;
  }

  toggleNotificationsMenu() {
    this.actionNotificationsMenuClosed = !this.actionNotificationsMenuClosed;
    this.actionContextMenuClosed = true;
  }


}
