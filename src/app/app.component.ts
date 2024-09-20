import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  title = 'basicx';
  isConnected: boolean = true;

  fullname: string = 'Malik Ture Lumumba'; // interpolation

  isDisabled: boolean = true; // property binding
  image: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  name: string = 'John Doe'; //2 way binding

  constructor() {}

  alert(message: string) {
    window.alert(message);
  }



  
}
