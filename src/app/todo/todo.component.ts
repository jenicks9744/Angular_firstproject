import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title:string="TODO APP"
  tasklist:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  AddTask(task:any){
    this.tasklist.push({id:this.tasklist.length+1,nametask:task})
  }

  RemoveTeask(id:any){
    this.tasklist=this.tasklist.filter(task=> task.id !== id)
  }

}
