import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  countries=["India","Sri Lanka","U.S","China"]
  userModel={
    name:"",
    email:"",
    phone:"",
    country:""
  }


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value)
  }

}
