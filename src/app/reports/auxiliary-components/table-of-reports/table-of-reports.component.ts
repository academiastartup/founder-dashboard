import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-of-reports',
  templateUrl: './table-of-reports.component.html',
  styleUrls: ['./table-of-reports.component.css']
})
export class TableOfReportsComponent implements OnInit {

  @Output() exportReportEvent = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {
  }

  emitExportReportEvent() {
    this.exportReportEvent.emit(null);
  }

}
