import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name:string="Jenicks"
  today:any=Date.now()
  num:number=1.23155468

  // passing values from child component pipes to parent component app:
  @Output() public childEvent=new EventEmitter()

  fireEvent(){
    this.childEvent.emit("hello Expertzlab");
  }
  constructor() { }

  ngOnInit(): void {
  }
  person={fname:"jenicks",lname:"johnson"}
}
