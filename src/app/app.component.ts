import { Component } from '@angular/core';
// import { Task } from 'zone.js/lib/zone-impl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basicx';
  isConnected: boolean = true;

  tasks: any = [
    {
      id: 1,
      title: "Apprendre Angular",
      done: true,
    },
    {
      id: 2,
      title: "Rejoindre le Discord de Bonjour Angular",
      done: true,
    },
    {
      id: 3,
      title: "Centrer une div",
      done: false,
    },
  ];

  user: any = {
    id: 1,
    role: "teacher",
  };
}
