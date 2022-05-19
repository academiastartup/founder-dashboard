import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-window',
  templateUrl: './search-result-window.component.html',
  styleUrls: ['./search-result-window.component.css']
})
export class SearchResultWindowComponent implements OnInit {

  @Input() userTypedInSearcData : string = '';
  @Input() searchResultWindwWidth : number = 75;

  constructor() { }

  ngOnInit(): void {
  }

  getWindwWidth() {
    debugger
    return this.searchResultWindwWidth + '%';
  }

}
