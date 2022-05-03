import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { PipesComponent } from './pipes/pipes.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Rxjx2Component } from './rxjx2/rxjx2.component';
import { AgePipe } from './age.pipe';
import { MultiplyPipe } from './multiply.pipe'
import {NgxPaginationModule} from 'ngx-pagination';
import { UserdetComponent } from './userdet/userdet.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
@NgModule({
  declarations: [
    AppComponent,TestComponent, Test2Component, Test3Component, PipesComponent, TodoComponent, UserComponent, UserdetailsComponent, RxjsComponent, Rxjx2Component, AgePipe, MultiplyPipe, UserdetComponent, HomeComponent, OfficeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutingModule, NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


