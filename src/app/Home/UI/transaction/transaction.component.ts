import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input() typeOfTransaction : string = '';
  @Input() transactionDescription : string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
