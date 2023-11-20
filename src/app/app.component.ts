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
      icon: 'person',
      name: 'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon: 'scan',
      name: 'Escanear QR',
      redirecTo: '/qr'
    },
    {
      icon: 'checkbox',
      name: 'Asistencia',
      redirecTo: '/asistencia'
    },
    {
      icon: 'document',
      name: 'Justificativo',
      redirecTo: '/justificativo'
    },
    {
      icon: 'document',
      name: 'Noticias',
      redirecTo: '/noticias'
    },
  ]

  constructor() { }
}
