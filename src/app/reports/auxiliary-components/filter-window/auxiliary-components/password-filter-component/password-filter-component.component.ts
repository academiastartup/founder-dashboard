import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-filter-component',
  templateUrl: './password-filter-component.component.html',
  styleUrls: ['./password-filter-component.component.css']
})
export class PasswordFilterComponentComponent implements OnInit {

  constructor() { }
  public userTypedInSearcData : string = '';

  ngOnInit(): void {}
  
  onTextChange(value : string) {
    this.userTypedInSearcData = value;
  }


}
