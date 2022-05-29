import { Component, OnInit, Output, Input, EventEmitter, OnDestroy} from '@angular/core';
import { ServiceFilterMessengerService } from '../../service-messengers/service-filter-messenger.service';
import { transactionType } from '../../services-for-data/service-for-data.service';

const MONTHS : Array<string> = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

@Component({
  selector: 'app-table-of-reports',
  templateUrl: './table-of-reports.component.html',
  styleUrls: ['./table-of-reports.component.css']
})
export class TableOfReportsComponent implements OnInit, OnDestroy {

  @Output() exportReportEvent = new EventEmitter<any>();
  @Input() transactionsData : Array<transactionType> = [];

  // vector to store subscriptions
  subscriber$ : any;
 
  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService
  ) { }

  ngOnInit(): void {
    this.subscriber$ = this.serviceFilterMessengerService.getFilterAndTransactionToSendAsObservable().
      subscribe((value : any) => {
        
        let transactions = value.transactionsData;

        if (value.filterArr.length > 0) {
          value.filterArr.forEach((filter : {name : string, type : string}) => {
            if (filter.type == 'status') {
              this.transactionsData = value.transactionsData.filter((transaction : any) => transaction.status == filter.name)
            }
          })
        } else {
          this.transactionsData = value.transactionsData;
        }
        
      });
  }

  emitExportReportEvent() {
    this.exportReportEvent.emit(null);
  }

  getInitials(name : string) : string {
    let names = name.split(" ");
    return `${names[0].charAt(0)} ${names[1].charAt(0)}`
  }

  getBetterDate(date : string) : string {
    let arrayOfDateParts = date.split("/");
    return `${arrayOfDateParts[2]} de ${MONTHS[+arrayOfDateParts[1]]}`
  }

  ngOnDestroy(): void {}

}
