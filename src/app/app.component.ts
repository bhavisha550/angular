import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './patient/login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CommonModule } from '@angular/common';




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


  //property binding
  title4 = 'property binding'
  name = "joy"
  disable=false;

  //if-else
  //title5 = 'if-else'
  //show=true

  //multiple conditions
  //title6 = 'else-if'
  // color="red";
  //color="green";

  //switch-case
  //title7= 'switch-case'
  //color = "red"

  //for loop
  // title8 = 'for loop'
  // users = ['isha', 'abc', 'xyz', 'sam', 'joy']
  // userDetails=[
  //   {name:'isha',email:'isha@some.com', phone:'27238729'},
  //   {name:'abc',email:'abc@some.com', phone:'73782929'},
  //   {name:'xyz',email:'xyz@some.com', phone:'67354829'},
  //   {name:'sam',email:'sam@some.com', phone:'34257729'},
  //   {name:'joy',email:'joy@some.com', phone:'60238729'}
  // ];


  //nested for loop
  // title9 = 'nested for loop'
  // users=[
  //     {name:'isha',email:'isha@some.com', phone:'27238729', social:['facebook','insta', 'snap']},
  //     {name:'abc',email:'abc@some.com', phone:'73782929', social:['insta', 'snap']},
  //     {name:'xyz',email:'xyz@some.com', phone:'67354829', social:['facebook', 'snap']},
  //     {name:'sam',email:'sam@some.com', phone:'34257729', social:['facebook','insta', ]},
  //     {name:'joy',email:'joy@some.com', phone:'60238729', social:['facebook','insta', 'snap', 'linkedin']}
  // ];
}



