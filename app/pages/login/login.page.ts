import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    correo: "",
    contra: "",
  }

  constructor() { }

  ngOnInit() {
  }
  async MostrarMensaje() {

  }

  async hub() {

  }

  Enviar() {
    console.log("Enviado");
    this.MostrarMensaje();
    this.usuario.correo = "";
    this.usuario.contra = "";
  }
}
