import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngMyToDo';


  todoForm !: FormGroup;
  listofTodo : {desc:string , priority:string, due :Date }[] = [];


  constructor(private fb : FormBuilder){};

  ngOnInit(): void {
    this.todoForm = this.fb.group(
      {
        desc : this.fb.control('',Validators.required),
        priority : this.fb.control('',Validators.required),
        due : this.fb.control('',Validators.required)
      }
    );
  }

  addTask(){
    const todo = this.todoForm.value;
    const todayString = new Date().toISOString();
    const todayDate = new Date(todayString.substring(0,10));
    const dueDate = new Date(todo.due);

    if (dueDate.getTime() < todayDate.getTime()){
      alert("Task with due date in the past cannot be added");
    }
    else{
      this.listofTodo.push({
        desc:todo.desc,
        priority:todo.priority,
        due: todo.due
      });
      this.todoForm.reset();
    }
  }

  removeTask(e:number){
    console.log(e);
    this.listofTodo.splice(e,1);
  }
}
