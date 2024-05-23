import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoList: Todo[] = [];
  constructor() { }

  ngOnInit() {
  }
  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {
    if(todoText){
    let maxValue = this.todoList.reduce((acc, value) => {
      return (acc = acc > value.todoId ? acc : value.todoId);
    }, 0);

    this.todoList.push({
      text: todoText,
      todoId: maxValue + 1,
      isCompleted: false
    });
  }
  }

  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
    this.todoList = [];
  }

  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: Todo) {
    var i = this.todoList.length;
    while (i--) {
      if ((this.todoList[i].todoId == todo.todoId)) {
        this.todoList[i].isCompleted = todo.isCompleted ? false : true;

      }
    }
  }

  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId: any) {
    var i = this.todoList.length;
    while (i--) {
      if ((this.todoList[i].todoId == todoId)) {
        this.todoList.splice(i, 1);
      }
    }
  }




}
