import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './patient/login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TodoListComponent, LoginComponent,UserListComponent, StudentListComponent, CountryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  title = 'my-app';
  displayVal='';
  // events
  getName(val:any) {
    console.warn(val)
    this.displayVal=val
  }
  getData(val:string)
  {
    console.warn(val)
  }

  //counter
  title2 = 'counter';
  count = 0
  counter(type:string)
  {
    type==='plus' ? this.count++ : this.count--
    
  }

  //style
  title3 = 'styling'
}



