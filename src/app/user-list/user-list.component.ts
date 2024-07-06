import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styles: [
    `.custom{color:red}
    li{
    display: inline-block;
    padding: 10px;
    background-color: skyblue;
    width: 30%;
    color: #fff;
    margin-right: 10px;
    border-left: 1px solid orange;  
    }
    `
    
  ]
})
export class UserListComponent implements OnInit{

  constructor() { }
@Input() use:{userName:string, emailAddress:string}={userName:'', emailAddress:''}
  ngOnInit(): void {
      
  }

}
