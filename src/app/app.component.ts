import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {Movie} from './movie/movie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TodoDataService]
})
export class AppComponent {

    newTodo: Todo = new Todo();
    title = "Homepage";


    constructor(private todoDataService: TodoDataService){
    }


    toggleTodoComplete(todo) {
        this.todoDataService.toggleTodoComplete(todo);
    }

    get todos() {
        return this.todoDataService.getAllTodos();
    }

    removeTodo(todo) {
        this.todoDataService.deleteTodoById(todo.id);
    }

    addTodo() {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
}

