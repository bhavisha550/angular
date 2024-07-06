import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit{

  constructor() { }
@Output() updateItemEvent = new EventEmitter<string>();
  ngOnInit(): void {

  }

}
