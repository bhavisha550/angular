import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrogComponent } from '../components/frog/frog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FrogComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
