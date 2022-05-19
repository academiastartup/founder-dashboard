import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-window',
  templateUrl: './filter-window.component.html',
  styleUrls: ['./filter-window.component.css']
})
export class FilterWindowComponent implements OnInit {

  @Input() modalWindowOpen : boolean = false;
  public selectedFilter : {name : string} = {name : 'Data'};

  constructor() { }

  ngOnInit(): void {
  }

  public setSelectedFilter(filterName : string) {
    this.selectedFilter.name = filterName;
  }

}
