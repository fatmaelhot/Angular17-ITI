import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  @Output() newTodo = new EventEmitter<string>();

  addTodo(todo : string) {
    this.newTodo.emit(todo);
  }
}
