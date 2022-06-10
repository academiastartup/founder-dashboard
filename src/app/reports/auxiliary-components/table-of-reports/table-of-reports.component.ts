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
     
        this.applyFilters(value.filterArr, value.transactionsData);

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

  computeSumOfTransactions() {
    let totalOftransactions = 0;
    this.transactionsData.forEach((transaction : transactionType) => {
      totalOftransactions += +transaction.value;
    });
    this.sumOfTransactionsEvent.emit(totalOftransactions);
  }

  /*
  ************* Filter functionality *************
  */

  applyFilters(filters : Array<filterType>, transactionsData : Array<transactionType>) : void {

    let filteredTransactionsToEmit : Array<transactionType> = transactionsData;

    // apply status filters
    filteredTransactionsToEmit = this.applyStatusFilter(
      filters.filter((filtr : filterType) => filtr.type == 'status'),
      filteredTransactionsToEmit
    );

    // apply quantity and direction filters
    filteredTransactionsToEmit = this.applyQuantityAndDirectionFilter(
      filters.filter((filtr : filterType) => filtr.type == 'quantity'),
      filteredTransactionsToEmit
    );
    
    this.transactionsData = filteredTransactionsToEmit;
    this.filteredDataEvent.emit(filteredTransactionsToEmit);
  }

  // quantity filter
  applyQuantityAndDirectionFilter(statusFilters : Array<filterType>, transactData : Array<transactionType>) : Array<transactionType> {
    let temporaryResults: any[]  = [];

    statusFilters.forEach((filter : filterType) => {
      
      if (filter.name == 'Entradas' || filter.name == 'Saídas') {
        temporaryResults.push(
          transactData.filter((transaction : transactionType) => transaction.direction == this.trasanctionDirectionTranslator(filter.name))
        );
      } else {
        temporaryResults.push(
          this.handleTransactionIntervals(filter.name.split(" "))
        );
      }
      
    });

    if (temporaryResults.length > 0) {
      return temporaryResults.flat(1);
    } else {
      return transactData;
    } 
  }

  // status filter
  applyStatusFilter(statusFilters : Array<filterType>, transactData : Array<transactionType>) : Array<transactionType> {
    let temporaryResults: any[]  = [];

    statusFilters.forEach((filter : filterType) => {
      temporaryResults.push(
        transactData.filter((transaction : transactionType) => transaction.status == filter.name)
      )
    });

    if (temporaryResults.length > 0) {
      return temporaryResults.flat(1);
    } else {
      return transactData;
    }      
  }



  /*
  ********  Helpers
  */
  trasanctionDirectionTranslator(filterName : string) : string {
    debugger
    if (filterName == 'Entradas') {
      return 'in';
    } else {
      return 'out';
    }
  }

  handleTransactionIntervals(filterComponents : Array<string>) : Array<transactionType> {
    return [];
  }




  ngOnDestroy(): void {
    this.subscriber$.unsubscribe();
  }

}
