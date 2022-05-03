import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { TodoComponent } from './todo/todo.component';
import { Test3Component } from './test3/test3.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Rxjx2Component } from './rxjx2/rxjx2.component';
import { UserdetComponent } from './userdet/userdet.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';

const routes:Routes = [
  {path:'',redirectTo:'rxjs',pathMatch:'full'},
  {path:"users",component:UserComponent},
  {path:"userdetails",component:UserdetailsComponent},
  {path:"todo",component:TodoComponent},
  {path:"test3",component:Test3Component},
  {path:"rxjs",component:RxjsComponent},
  {path:"rxjs2",component:Rxjx2Component},
  {path:"userdet",component:UserdetComponent},
  {path:"userdet/:id",component:UserdetComponent,
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"office",component:OfficeComponent}
  ]}
  ,{path:"**",redirectTo:'rxjs2'}
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule { }
