import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule, NgSwitchDefault } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {NgForm} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { PatientComponent } from './patient/patient.component';
import { FooterComponent } from './footer/footer.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TodoListComponent, LoginComponent,UserListComponent, CommonModule, HeaderComponent, ChildComponent, PatientComponent, FooterComponent],
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
  title5 = 'if-else'
  show=true

  //multiple conditions
  title6 = 'else-if'
  color="red";
  //color="green";

  //switch-case
  title7= 'switch-case'
  color1 = "green"

  //for loop
  title8 = 'for loop'
  users = ['isha', 'abc', 'xyz', 'sam', 'joy']
  userDetails=[
    {name:'isha',email:'isha@some.com', phone:'27238729'},
    {name:'abc',email:'abc@some.com', phone:'73782929'},
    {name:'xyz',email:'xyz@some.com', phone:'67354829'},
    {name:'sam',email:'sam@some.com', phone:'34257729'},
    {name:'joy',email:'joy@some.com', phone:'60238729'}
  ];


  //nested for loop
  title9 = 'nested for loop'
  users1=[
      {name:'isha',email:'isha@some.com', phone:'27238729', social:['facebook','insta', 'snap']},
      {name:'abc',email:'abc@some.com', phone:'73782929', social:['insta', 'snap']},
      {name:'xyz',email:'xyz@some.com', phone:'67354829', social:['facebook', 'snap']},
      {name:'sam',email:'sam@some.com', phone:'34257729', social:['facebook','insta', ]},
      {name:'joy',email:'joy@some.com', phone:'60238729', social:['facebook','insta', 'snap', 'linkedin']}
  ];

  //style binding
  title10 = 'style binding';
  color2 = "orange"
  bgcolor="red"

  updateColor()
  {
    this.color2="pink"
    this.bgcolor="skyblue"
  }

  //heading
  title11 = 'header component'

  //forms
  title12 = 'basic forms.!'
  getInfo(info:NgForm)
  {
    console.warn(info)
  }

  //toggle
  title13 = 'toggle element'
  shows = true;
  toggle() {
    this.shows=!this.shows;
  }

  //bootstrap
  title14 = 'bootstrap'

  //to-do list
  title15 = 'To-do List'
  list:any[]=[];
  addTask(some:string)
  {
    this.list.push({id:this.list.length, fullName:some});
    console.warn(this.list);
  }
  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(some=>some.id!==id)
  }


  //parent to child
  title16 = 'parent to child'
  someData = 10;
  updateChild()
  {
    this.someData=Math.floor(Math.random()*10)
  }

  //reusing component
  title17 = 'Reusing component.!'
  userData = [
    {userName: 'Isha', emailAddress: 'isha@gmail.com'},
    {userName: 'Thomas', emailAddress: 'thomas@gmail.com'},
    {userName: 'Bhaskar', emailAddress: 'bhaskar@gmail.com'},
    {userName: 'Roy', emailAddress: 'roy@gmail.com'},

  ]


  //child to parent
  title18 = 'Child to Parent'
  d="x"
  updateItem(i:string)
  {
    console.warn(i);
    this.d="i"
  }

  //two way binding
  // title19 = 'two way binding'
  // person:any;

  //template reference variable
  title20 = 'Template Reference Variable'
  getVal(valz:any)
  {
    console.log(valz)
  }

  //pipes
  title21 = 'Angular Basic Pipes'
  today = Date()
  using = {
    n:'isha',
    ag:22
  }

  //template driven forms (html)
  // title22 = 'Template Driven Forms'

  //directives
  title23 = 'Directives'

  //services
  // title24 = 'Services In Angular'
  // memberData=[
  //   {pName:'abc', measureSelected:'IMA'},
  //   {pName:'xyz', measureSelected:'COA'},
  //   {pName:'pqr', measureSelected:'AMR'},
  //   {pName:'som', measureSelected:'AMM'}
  // ]
}



