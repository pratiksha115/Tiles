import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
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

];

