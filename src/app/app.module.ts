import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import {TaxPipe} from './pipes/tax.pipe';
import {HomePage} from './home/home.page';
import { UserComponent } from './component/user/user.component';
import {HighlightDirective} from './highlight.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {LocalStorageService} from './services/local-storage.service';
import { HttpService } from './services/http.service';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CalcComponent} from './component/calc/calc.component'
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [AppComponent, HomePage, UserComponent, CalcComponent, LoginComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, TaxPipe, HighlightDirective, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LocalStorageService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
