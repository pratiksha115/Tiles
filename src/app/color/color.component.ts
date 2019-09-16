import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'qty', 'amt','total'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  id: number;
  date: string;
  qty: number;
  amt: number;
  total:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, date: '2019-01-01', qty: 1.0079, amt: 20000, total:32100},
  {id: 2, date: '2019-02-02', qty: 4.0026, amt: 30000, total:23450},
  {id: 3, date: '2019-03-03', qty: 6.941,  amt: 21300, total:76543},
  {id: 4, date: '2019-04-04', qty: 9.0122, amt: 30000, total:70000},
  {id: 5, date: '2019-05-05', qty: 10.811, amt: 40000, total:23457},
  {id: 6, date: '2019-06-06', qty: 12.0107,amt: 50000, total:89540},
  {id: 7, date: '2019-07-07', qty: 14.0067,amt: 60000, total:64392},
  {id: 8, date: '2019-08-08', qty: 15.9994,amt: 70000, total:43216},
  {id: 9, date: '2019-09-09', qty: 18.9984,amt: 80000, total:65342},
  {id:10, date: '2019-07-08', qty: 20.1797,amt: 90000, total:90000},
];
