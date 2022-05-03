import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:String = "Jenicks's";
  public name:String ="Jenicks"
  name1="Rahul"

  public getName(){
    return this.name
  }

  // object

  public newObj={
    name:"Johns",
    age:"28"
  }

  // Array
  public arr=[10,12,45,15]

  // url
  public url= window.location.href


// value from child component
message="";

}
