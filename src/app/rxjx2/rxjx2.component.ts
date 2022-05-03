import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjx2',
  templateUrl: './rxjx2.component.html',
  styles: [
  ]
})
export class Rxjx2Component implements OnInit {

  constructor() { }
  personlist=["johns","Ramu","Akhila"]
  persons:Observable<string[]>= of(this.personlist)
  newpersons:Observable<string>= from (this.personlist)
  studentanme:Observable<string>=of("Ajesh")

  messages=""
  name1="jenicks"

  ngOnInit(): void {
    // let numbers=of(1,2,3,4,5)
    // of(1,2,3).subscribe(data=>{console.log(data)})
    // numbers.subscribe(data=>{console.log(data)})

    // numbers.pipe(map(x=>x*x)).subscribe(data=>{console.log(data)})

    // this.persons.subscribe(data=>{console.log(data)})
    // this.studentanme.subscribe(data=>{console.log(data)})
    // this.newpersons.subscribe(data=>{console.log(data)})
  }

}
