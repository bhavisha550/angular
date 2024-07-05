import { Component, OnInit, InputDecorator, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{
  constructor() {

  }
@ Input() someItem = 0;
  ngOnInit(): void {
      
  }

  

}
