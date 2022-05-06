import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main-dashboard';
  public actionContextMenuClosed : boolean = true;

  toggleContextMenu() {
    this.actionContextMenuClosed = !this.actionContextMenuClosed;
  }
}
