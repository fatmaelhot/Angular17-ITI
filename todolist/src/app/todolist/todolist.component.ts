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
  // toggling attribute
  status:boolean  = false;

  deleteTodo(index : number) {
    this.InputFromParent.splice(index, 1);
  }
   // toggle status to show and hide line-through property (defined in list.component.css)
   toggle():void
   {
      this.status = ! this.status ;
   }
}
