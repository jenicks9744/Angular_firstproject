import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';



@Component({
  selector: 'app-userdet',
  templateUrl: './userdet.component.html',
  styleUrls: ['./userdet.component.css']
})
export class UserdetComponent implements OnInit {
  userid:any
  user:any
  constructor(private route:ActivatedRoute,private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.userid=this.route.snapshot.params['id']
    this.userservice.getUser(this.userid).subscribe(data=>this.user=data)
  }

}
