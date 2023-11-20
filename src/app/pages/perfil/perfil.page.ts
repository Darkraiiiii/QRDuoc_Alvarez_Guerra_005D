import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicio/auth.service'
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario={
    id:0,
    nombre:'',
    apellido:'',
    usuario:'',
    contraseña:'',
    role:'',
    isactive:false
  }
  constructor(private menuController: MenuController,
              private authservice:AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  MostrarMenu() {
    this.menuController.open('first');
  }

  ionViewWillEnter(){
    this.getUsuariById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuariById(usuarioID:number){
    this.authservice.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{
        this.usuario={
          id:resp[0].id,
          nombre:resp[0].nombre,
          apellido:resp[0].apellido,
          usuario:resp[0].usuario,
          contraseña:resp[0].contraseña,
          role:resp[0].role,
          isactive:resp[0].isactive
        }
      }
    )
  }
}
