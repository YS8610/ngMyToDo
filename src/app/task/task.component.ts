import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() t !:{desc:string, priority: string, due:Date};
  @Input() ind !: number;
  @Input() editing!:boolean;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();

  isDone = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDone(e:Event){
    this.isDone = (<HTMLInputElement>e.target).checked;
  }

  deleteTask(){
    this.onDelete.emit(this.ind);
  }

  editTask(){
    this.onEdit.emit(this.ind);
  }
}
