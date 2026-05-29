import { Component, signal } from '@angular/core';
import { Associatemodel } from '../../Models/Associatemodel';


@Component({
  selector: 'app-signal-formz',
  standalone: true,
  imports: [],
  templateUrl: './signal-formz.component.html',
  styleUrl: './signal-formz.component.css'
})
export class SignalFormzComponent {
  _obj= signal<Associatemodel>({
    name: '',
    username: '',
    password: '',
    isactive: false,

  })
 

}
