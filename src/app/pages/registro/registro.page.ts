import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApicrudService } from '../../servicio/apicrud.service';
import { User } from '../interfaces/interfaces';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm:FormGroup;

  usuario = {
    nombre: '',
    apellido: '',
    usuario: '',
    password: '',
    asignatura1:'',
    asignatura2:'',
    role:'',
    isactive:false
  }
  constructor(private alertcontroller:AlertController,
              private router:Router,
              private apicrud:ApicrudService,
              private fbuilder:FormBuilder) {
                this.registroForm=this.fbuilder.group({
                  'nombre':new FormControl ("", [Validators.required]),
                  'apellido': new FormControl("", [Validators.required]),
                  'usuario': new FormControl ("", [Validators.required, Validators.minLength(3)]),
                  'contra': new FormControl("",[Validators.required, Validators.minLength(4)]),
                  'role':new FormControl("",Validators.required),
                  'asig1': new FormControl(''),
                  'asig2': new FormControl(''),  
                })
               }

  ngOnInit() {
  }

registrar(){

  if (this.registroForm && this.registroForm.get('role')){
      {
        this.usuario.nombre = this.registroForm.value.nombre;
        this.usuario.apellido = this.registroForm.value.apellido;
        this.usuario.password = this.registroForm.value.contra;
        this.usuario.usuario = this.registroForm.value.usuario;
        this.usuario.role = this.registroForm.value.role;
        this.usuario.asignatura1 = this.registroForm.value.asig1;
        this.usuario.asignatura2 = this.registroForm.value.asig2;
        this.usuario.isactive=true;
        this.apicrud.CrearUsuario(this.usuario).subscribe();
        this.mostrarMensaje();
        this.registroForm.reset();
        this.router.navigate(['inicio'])
      }
  }
}

async mostrarMensaje(){
  const alerta = await this.alertcontroller.create({ 
    header: 'Nuevo usuario creado',
    message: 'Bienvenido! '+ this.usuario.nombre ,
    buttons: ['Ok']
  });
  alerta.present();
}

}
