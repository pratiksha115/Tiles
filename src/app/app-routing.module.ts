import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SnavComponent } from './snav/snav.component';
import { CrumbComponent } from './crumb/crumb.component';
import { SolutionComponent } from './solution/solution.component';
import { ModularComponent } from './modular/modular.component';
import { ColorComponent } from './color/color.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ProductionComponent } from './production/production.component';
import { ColorNameComponent } from './color-name/color-name.component';
import { ColorCodeComponent } from './color-code/color-code.component';

const routes: Routes = [
                        
                        {path:'',component:LoginComponent},
                        {path:'login',component:LoginComponent},
                        {path:'snav',component:SnavComponent,

                      
                      
children:[
           {path:'',component:DashboardComponent},  
           {path:'production',component:ProductionComponent},
           {path:'crumb',component:CrumbComponent},
           {path:'solution',component:SolutionComponent},
           {path:'modular',component:ModularComponent},
           {path:'color',component:ColorComponent,
                  children:
                     [
                       {path:'color-name',component:ColorNameComponent},  
                      {path:'color-code',component:ColorCodeComponent},
                    ]
          },
           {path:'payroll',component:PayrollComponent}
         ] },
        ];
                
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
