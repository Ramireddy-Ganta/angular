import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {accountRoutes} from './account.route';
import {AccountGuard} from './account.guard';

@NgModule({
    declarations: [      
      
    ],
    imports: [
             RouterModule.forRoot(accountRoutes)
    ],   
    providers: [AccountGuard],
    bootstrap: []
  })
  export class AccounModule { }