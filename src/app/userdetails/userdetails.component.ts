import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public users;
  constructor(private userservice:UserserviceService) {}

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data=>this.users=data);
  }

}
