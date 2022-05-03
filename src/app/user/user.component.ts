import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users:any=[]
  p:number=1;
  errormsge:String="Something went wrong"
  // public users
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(data=>this.users=data),(err)=>{this.errormsge};
  }

}
