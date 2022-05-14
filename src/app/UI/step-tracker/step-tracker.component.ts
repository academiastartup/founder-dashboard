import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-tracker',
  templateUrl: './step-tracker.component.html',
  styleUrls: ['./step-tracker.component.css']
})
export class StepTrackerComponent implements OnInit {

  @Input() stepsNumber : number = 0;
  stepsNumberArray : Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    this.getArrayFromNumber();
  }


  /*Utility to transform a number into a vector with as many elements as the number it gets*/
  getArrayFromNumber() {
    for (let i = 1; i <= this.stepsNumber; i++) {
      this.stepsNumberArray.push(i);
    }
  }

}
