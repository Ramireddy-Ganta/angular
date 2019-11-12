import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent } from './account/login/login.component'
import {AccountGuard} from './account/account.guard';
import {ProjectComponent} from './admin/projects/projects.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AccountGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
