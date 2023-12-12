import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../../servicio/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  numero : any;
  
  usuario={
    id:0,
    nombre:'',
    apellido:'',
    usuario:'',
    password:'',
    asignatura1:'',
    asignatura2:'',
    role:'',
    isactive:false
  }

  constructor(private router: Router,
              private authservice:AuthService,
              private toastController:ToastController,
              private alertController:AlertController) { }

  ionViewWillEnter(){
    this.GetUserById(this.getIdFromUrl());
    this.numero = sessionStorage.getItem('id');
    const usuarioID = this.getIdFromUrl();
  }


  ngOnInit() {
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  async UserACtualizado(){
    const alerta = await this.alertController.create({
      header: 'Listo',
      message: 'Los datos del usuario han sido modificados',
      buttons: ['OK']
    })
    alerta.present();
    return;
  }

  async UserNoActualizado(){
    const alerta = await this.alertController.create({
      header: 'Error...',
      message: 'Porfavor, ingrese una contraseña valida.',
      buttons: ['OK']
    })
    alerta.present();
    return;
  }

  GetUserById(usuarioID:number){
    this.authservice.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{
        this.usuario={
          id:resp[0].id,
          nombre:resp[0].nombre,
          apellido:resp[0].apellido,
          usuario:resp[0].usuario,
          password:resp[0].password,
          asignatura1:resp[0].asignatura1,
          asignatura2:resp[0].asignatura2,
          role:resp[0].role,
          isactive:resp[0].isactive
        }
        console.log('Usuario:', this.usuario);
        
      }
    )
  }
  
  updateUsuario(){

    if (this.usuario.password.length >= 4){
      this.authservice.ActualizarUsuario(this.usuario).subscribe();
      this.UserACtualizado();
      this.router.navigateByUrl("/hub");
    }

    if (this.usuario.password.length < 4){
      this.UserNoActualizado();
    }

    }

}
