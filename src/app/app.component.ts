import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {


  opciones: Componente[] = [
    {
      icon: 'home',
      name: 'Inicio',
      redirecTo: '/hub'
    },
    {
      icon: 'scan',
      name: 'Escanear QR',
      redirecTo: '/qr'
    },
    {
      icon: 'document',
      name: 'Noticias',
      redirecTo: '/noticias'
    },
  ]

  constructor() { }
}
