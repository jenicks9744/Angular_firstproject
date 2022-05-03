import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor() { }
  public name:any=""
  displayName:boolean=true
  displayColor="black"
  //
  greet(first:any,second:any){
    alert("Hello " + first.value + second.value)
  }

  ngOnInit(): void {
  }

  number:any=""

  persons=['rahul','anand','Arun','anand']
  changePerson(events:any){
    alert ("value changed"+events.target.value)
    console.log(events.target.value)
  }

}
