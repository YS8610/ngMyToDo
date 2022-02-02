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
  isEdit = false;
  editIndex !: number;

  constructor(private fb : FormBuilder){
    if (localStorage.getItem("todos")){
      this.listofTodo = JSON.parse( <string>localStorage.getItem("todos") );
    }
  };

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
      this.saveToDoLocalStorage(this.listofTodo);
      this.todoForm.reset();
    }
  }

  removeTask(e:number){
    console.log(e);
    this.listofTodo.splice(e,1);
    this.saveToDoLocalStorage(this.listofTodo);
  }

  editTask(e:number){
    this.todoForm.setValue({
      desc : this.listofTodo[e].desc,
      priority : this.listofTodo[e].priority,
      due : this.listofTodo[e].due
    });
    this.isEdit = true;
    this.editIndex = e;
  }

  saveEditTask(){
    const todo = this.todoForm.value;
    const todayString = new Date().toISOString();
    const todayDate = new Date(todayString.substring(0,10));
    const dueDate = new Date(todo.due);

    if (dueDate.getTime() < todayDate.getTime()){
      alert("Task with due date in the past cannot be saved");
    }
    else{
      this.listofTodo[this.editIndex].desc = todo.desc;
      this.listofTodo[this.editIndex].priority = todo.priority;
      this.listofTodo[this.editIndex].due = todo.due;
      this.todoForm.reset();
      this.isEdit = false;
      this.saveToDoLocalStorage(this.listofTodo);
    }
  }

  saveToDoLocalStorage( todolist: {desc:string , priority:string, due :Date }[] ):void{
    localStorage.setItem("todos", JSON.stringify(todolist));
  }
}
