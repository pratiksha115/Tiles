import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import{MatGridListModule}from '@angular/material';
import { from } from 'rxjs';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrumbComponent } from './crumb/crumb.component';
import { SolutionComponent } from './solution/solution.component';
import { ModularComponent } from './modular/modular.component';
import { ProductionComponent } from './production/production.component';
import { ColorComponent } from './color/color.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SnavComponent } from './snav/snav.component';
import { ColorNameComponent } from './color-name/color-name.component';
import { ColorCodeComponent } from './color-code/color-code.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CrumbComponent,
    SolutionComponent,
    ModularComponent,
    ProductionComponent,
    ColorComponent,
    PayrollComponent,
    SnavComponent,
    ColorNameComponent,
    ColorCodeComponent,
  
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatGridListModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
