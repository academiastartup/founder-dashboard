import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-component',
  templateUrl: './no-data-component.component.html',
  styleUrls: ['./no-data-component.component.css']
})
export class NoDataComponentComponent implements OnInit {

  @Input() noDataMsg : string = 'SEM INFORMAÇÕES PARA MOSTRAR';
  @Input() showAditionalLinks : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
