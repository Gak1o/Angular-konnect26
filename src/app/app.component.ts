import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalFormzComponent } from './signal-formz/signal-formz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignalFormzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-example';
}
