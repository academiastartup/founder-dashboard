import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-from-search-result',
  templateUrl: './user-from-search-result.component.html',
  styleUrls: ['./user-from-search-result.component.css']
})
export class UserFromSearchResultComponent implements OnInit {

  @Input() userDetails : any;

  public showSelectIcon : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  selectRow() {
    this.showSelectIcon = !this.showSelectIcon;
  }

}
