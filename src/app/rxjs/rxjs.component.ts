import { Component, OnInit } from '@angular/core';

import { filter, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }
  num:any;
  mysubscription:Subscription;

  ngOnInit(): void {
  // const observable = new Observable(observer=>{
  //   setInterval(()=>{
  //     observer.next(10)

  //   },2000)

  //   setInterval(()=>{

  //     observer.next(20)
  //   },3000)

  // })
  // observable.subscribe(data=>{
  //   {console.log(data)
  //   this.num=data}
  // })

  // // Promise ::::::::::::::::::::::::::::::::
  // const promise =new Promise((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve("promise is working")
  //   },1000)

  // })
  // // promise.then(data=>{console.log(data)})

  // const observables = new Observable(observer=>{
  //   setTimeout(()=>{
  //   observer.next("observer is working")
  // },1000)
  // })
  // // observables.subscribe(data=>{console.log(data)})

  // const prom=new Promise((resolve,reject)=>{
  //   console.log("promise call")
  //   setTimeout(()=>{
  //     resolve("promise is working1")
  //     resolve("promise is working2")
  //     resolve("promise is working3")
  //     resolve("promise is working4")
  //   },1000)
  // })

  // prom.then(data=>{console.log(data)})

  // const Obser=new Observable(observer=>{
  //   console.log("observe call")
  //   let counter=0
  //   setInterval(()=>{
  //     counter=counter+1
  //     observer.next(counter)
  //   },1000)
  // })
  // this.mysubscription=Obser.subscribe(data=>{console.log('counter '+data)})

  // Obser.pipe(filter(d=>d==="observabile is working "))
  // .subscribe(data=>{console.log(data)})

  }
  ngOnDestroy() {
    // throw new Error('Function not implemented.');
    // this.mysubscription.unsubscribe();
  }
}



