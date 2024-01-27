import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  @Input() InputFromParent: string[] = [];

  deleteTodo(index : number) {
    this.InputFromParent.splice(index, 1);
  }
   
}
