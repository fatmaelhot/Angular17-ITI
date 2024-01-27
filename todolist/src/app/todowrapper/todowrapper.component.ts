import { Component ,Input,input} from '@angular/core';
import { TodoformComponent } from '../todoform/todoform.component';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-todowrapper',
  standalone: true,
  imports: [TodoformComponent,TodolistComponent],
  templateUrl: './todowrapper.component.html',
  styleUrl: './todowrapper.component.css'
})
export class TodowrapperComponent {
  todos : string[] = [];

  insertTodo(todo : string) {
    if (todo.trim() != "")
      this.todos.push(todo);
  }

}
