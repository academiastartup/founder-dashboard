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

interface filterType {name : string, type : string}

@Component({
  selector: 'app-table-of-reports',
  templateUrl: './table-of-reports.component.html',
  styleUrls: ['./table-of-reports.component.css']
})
export class TableOfReportsComponent implements OnInit, OnDestroy {

  @Output() exportReportEvent = new EventEmitter<any>();
  @Output() sumOfTransactionsEvent = new EventEmitter<number>();
  @Output() filteredDataEvent = new EventEmitter<Array<transactionType>>();

  @Input() transactionsData : Array<transactionType> = [];

  // vector to store subscriptions
  subscriber$ : any;
 
  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService
  ) { }

  ngOnInit(): void {
    this.subscriber$ = this.serviceFilterMessengerService.getFilterAndTransactionToSendAsObservable().
      subscribe((value : any) => {
      
        ////// ---- STATUS FILTER ---- //////
        this.statusFilterHandler(
          value.filterArr.filter((filtr : filterType) => filtr.type == 'status'),
          value.transactionsData
        )


         // computes sum of all transactions and send it back to table-reports component
         this.computeSumOfTransactions();

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

  statusFilterHandler(statusFilters : Array<filterType>, transactData : Array<transactionType>) : void {
    let temporaryResults: any[]  = [];
    statusFilters.forEach((filter : filterType) => {
      temporaryResults.push(
        transactData.filter((filtr : transactionType) => filtr.status == filter.name)
      )
    })

    /*
    * THE FOLLOWING CODE SHOULD BE REPLACED BY A BETTER ALTERNATIVE
    */
    if (temporaryResults.length > 0) {
      this.transactionsData = temporaryResults.flat(1);
      this.filteredDataEvent.emit([]);
    } else {
      this.transactionsData = transactData;
    }

    this.filteredDataEvent.emit(this.transactionsData);
      
  }

  computeSumOfTransactions() {
    let totalOftransactions = 0;
    this.transactionsData.forEach((transaction : transactionType) => {
      totalOftransactions += +transaction.value;
    });
    this.sumOfTransactionsEvent.emit(totalOftransactions);
  }

  ngOnDestroy(): void {
    this.subscriber$.unsubscribe();
  }

}
