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
  
  numero : any;
  
  usuario={
    id:0,
    nombre:'',
    apellido:'',
    usuario:'',
    contraseña:'',
    asignatura1:'',
    asignatura2:'',
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
    this.GetUserById(this.getIdFromUrl());
    this.numero = sessionStorage.getItem('id');
    const usuarioID = this.getIdFromUrl();
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  GetUserById(usuarioID:number){
    this.authservice.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{
        this.usuario={
          id:resp[0].id,
          nombre:resp[0].nombre,
          apellido:resp[0].apellido,
          usuario:resp[0].usuario,
          contraseña:resp[0].contraseña,
          asignatura1:resp[0].asignatura1,
          asignatura2:resp[0].asignatura2,
          role:resp[0].role,
          isactive:resp[0].isactive
        }
        console.log('Usuario:', this.usuario);
        
      }
    )
  }
}
