import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-snav',
  templateUrl: './snav.component.html',
  styleUrls: ['./snav.component.css']
})
export class SnavComponent implements OnInit {
  number:number;
  show:boolean=false;
  constructor(private router:Router) { }
 count=0;
 OpenOnClick()
 {
   if(this.count==0)
   {
     this.show=true;
     this.count++;
   }
   else{
     this.count--;
     this.show=false;
   }
 }
  ngOnInit() {
  }
  
change(){

}

set(event:number)
{
  this.number=event;
  switch(this.number)
  {
    case 0:
      this.router.navigate(['/snav/production']);
      break;
    case 1:
          this.router.navigate(['/snav/crumb']);
          break;
    case 2:
          this.router.navigate(['/snav/solution']);
              break;
    case 3:
          this.router.navigate(['/snav/modular']);
              break;         
    case 4:
          this.router.navigate(['/snav/color/color-name']);
               break; 
    case 5:
          this.router.navigate(['/snav/color/color-code']);
                break; 
   case 6:
          this.router.navigate(['/snav/payroll']);
                  break; 
    default:alert("error");                                   
  }
}
logoutButton()
  {
    this.router.navigate(['/login']);
  }


}
