import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  xyz = "check";
  data = "starting with angular"   //dynamic data
  getValue()
  {
    return "inside function"
  }
}
