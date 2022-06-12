import { Component, OnInit, Output, Input, EventEmitter, OnDestroy} from '@angular/core';
import { ServiceFilterMessengerService } from '../../service-messengers/service-filter-messenger.service';
import { transactionType } from '../../services-for-data/service-for-data.service';

const MONTHS : Array<string> = [
  'Jan','Fev','Mar',
  'Abr','Mai','Jun','Jul',
  'Ago','Set','Out',
  'Nov','Dez'
];

const ABREVIATED_MONTHS : any = {
  'Jan' : "01", 'Fev' : "02",'Mar' : "03",
  'Abr' : "04",'Mai' : "05",'Jun' : "06",
  'Jul' : "07",'Ago' : "08",'Set' : "09",
  'Out' : "10",'Nov' : "11",'Dez' : "12"
};

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
    return `${arrayOfDateParts[2]} de ${MONTHS[+arrayOfDateParts[1] - 1]},  ${arrayOfDateParts[0]}`
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

    // apply date filters
    filteredTransactionsToEmit = this.applyDateFilter(
      filters.filter((filtr : filterType) => filtr.type == 'Date'),
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
          this.handleTransactionIntervals(filter.name.split(" "), transactData)
        );
      }
      
    });

    if (temporaryResults.length > 0) {
      return temporaryResults.flat(1);
    } else {
      return transactData;
    } 
  }

  // date filter
  applyDateFilter(dateFilters : Array<filterType>, transactData : Array<transactionType>) : Array<transactionType> {
    debugger
    
    let temporaryResults: any[]  = [];
    let dateFilter = dateFilters[0] ? dateFilters[0].name : '';
    
    temporaryResults = transactData.filter((transaction) => new Date(transaction.date) >= new Date(this.figureDateFilter(dateFilter).startDate) && new Date(transaction.date) <= new Date(this.figureDateFilter(dateFilter).endDate));
   
    if (temporaryResults.length > 0) {
      return temporaryResults;
    } else if  (dateFilter == '') {
      return transactData;
    } else {
      return [];
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
  ******************* Helpers
  */
  trasanctionDirectionTranslator(filterName : string) : string {
    if (filterName == 'Entradas') {
      return 'in';
    } else {
      return 'out';
    }
  }

  extractMonetaryValueFromRanges(text : string) : {least : number, bigger : number} {
    let expressionParts : Array<any> = text.split('-');
    let leastNumber : number = +expressionParts[0].split('Kz')[1];
    let biggerNumber: number = +expressionParts[1].split('Kz')[1];
    return {
      least : leastNumber,
      bigger : biggerNumber
    }
  }

  extractMonetaryValueFromSpecific(text : string) : {value : number} {
    let expressionParts : Array<any> = text.split('=');
    return {
      value : +expressionParts[1].split('Kz')[1]
    }
  }

  extractMonetaryValueFromMinimumValue(text : string) : {value : number} {
    let expressionParts : Array<any> = text.split('>');
    return {
      value : +expressionParts[1].split('Kz')[1]
    }
  }

  extractMonetaryValueFromMaxValue(text : string) : {value : number} {
    let expressionParts : Array<any> = text.split('<');
    return {
      value : +expressionParts[1].split('Kz')[1]
    }
  }

  removeBlankSpace(text : string) : string {
    let newText = '';
    for (let x = 0; x < text.length; x++) {
      if (text[x] != " ") {
        if (x != 0)
          newText += text[x];
      }
    }
    return newText;
  }

  formatNumber(number : string) : string {
    if (+number < 10) {
      return `0${number}`
    }
    return number;
  }


  figureDateFilter(dateFilter : string) : {startDate : string, endDate : string} {
    let startDate = '', endDate = '';

    if (dateFilter != '') {
      let dateFilterParts = dateFilter.split('-');

      // one month period
      if (dateFilterParts[0].split(",").length == 1) {
        startDate = `${dateFilterParts[1].split(",")[1]}/${ABREVIATED_MONTHS[dateFilterParts[0].split(" ")[0]]}/${this.formatNumber(dateFilterParts[0].split(" ")[1])}`;
        endDate = `${dateFilterParts[1].split(",")[1]}/${ABREVIATED_MONTHS[dateFilterParts[1].split(",")[0].split(" ")[1]]}/${this.formatNumber(dateFilterParts[1].split(",")[0].split(" ")[3])}`;
      }

      // multiple months period
      if (dateFilterParts[0].split(",").length == 2) { 
        startDate = `${dateFilterParts[0].split(",")[1]}/${ABREVIATED_MONTHS[dateFilterParts[0].split(",")[0].split(" ")[0]]}/${this.formatNumber(dateFilterParts[0].split(",")[0].split(" ")[1])}`;
        endDate = `${dateFilterParts[1].split(",")[1]}/${ABREVIATED_MONTHS[this.formatNumber(dateFilterParts[1].split(",")[0].split(" ")[1])]}/${this.formatNumber(dateFilterParts[1].split(",")[0].split(" ")[2])}`;
      }
    }
    
    return {
      startDate : startDate,
      endDate : endDate
    };
  }

  handleTransactionIntervals(filterComponents : Array<string>, transactions : Array<transactionType>) : Array<transactionType> {  
    let temporaryResults: Array<any> = []; 

    if (filterComponents[0] == 'Entradas' || filterComponents[0] == 'Saídas') {
      temporaryResults.push(
        transactions.filter((transaction : transactionType) => transaction.direction == this.trasanctionDirectionTranslator(filterComponents[0]))
      );
      temporaryResults = temporaryResults.flat(1);
    } else {
      temporaryResults = transactions;
    }

    // for ranges
    if (filterComponents[1].indexOf("-") != -1) {
      //alert('its a range');
      return temporaryResults.filter(transaction => transaction.value >= this.extractMonetaryValueFromRanges(filterComponents[1]).least && transaction.value <= this.extractMonetaryValueFromRanges(filterComponents[1]).bigger);
    } else if (filterComponents[1].indexOf("=") != -1) {
      //alert('specific value');
      return temporaryResults.filter(transaction => transaction.value == this.extractMonetaryValueFromSpecific(filterComponents[1]).value)
    } else if (filterComponents[1].indexOf(">") != -1) {
      //alert('at least');
      return temporaryResults.filter(transaction => transaction.value >= this.extractMonetaryValueFromMinimumValue(filterComponents[1]).value)
    } else {
      //alert('no more than');
      return temporaryResults.filter(transaction => transaction.value <= this.extractMonetaryValueFromMaxValue(filterComponents[1]).value)
    }
  }

  ngOnDestroy(): void {
    this.subscriber$.unsubscribe();
  }

}
