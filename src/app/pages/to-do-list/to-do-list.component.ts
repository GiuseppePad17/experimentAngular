import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {

  constructor() { 
    this.titleTask="";
    this.descriptionTask="";
  }

  titleTask:string;
  descriptionTask:string;

  listTask: string[] = [];
  listDescriptionTask: string[]=[];
  

  ngOnInit(): void {
  }

  //title list task da svolgere
  public getValueTask(){
    this.listTask.push(this.titleTask);
    console.log(this.listTask);
    console.log(this.descriptionTask);
    this.listDescriptionTask.push(this.descriptionTask);

  }



}
