import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  // classToApply:string="boldFont italicBond fontColor"
  // classNotToApply:string=""
  classApply:string=" "
  isApply:boolean=false
  constructor() { }
  
  onClick(event:any){
    console.log(event.type)
    this.isApply = !this.isApply
  }

  // fontChange(){
  //   this.isApply= !this.isApply
  //   if(this.isApply){
  //     this.classApply="boldFont italicBond fontColor"
  //   }else{
  //     this.classApply=""
  //   }
  // }

  fontstyles={
    
  }

  ngOnInit(): void {
  }

}
