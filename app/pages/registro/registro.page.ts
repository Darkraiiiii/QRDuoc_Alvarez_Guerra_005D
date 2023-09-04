import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombre: "",
    apellido: "",
    correo: "",
    contra: "",
  }
  constructor() { }

  ngOnInit() {
  }

  async MostrarMensaje() {

  }

  async login() {

  }
  Enviar() {
    console.log("Enviado");
    this.MostrarMensaje();
    this.usuario.nombre = "";
    this.usuario.apellido = "";
    this.usuario.correo = "";
    this.usuario.contra = "";
  }
}
