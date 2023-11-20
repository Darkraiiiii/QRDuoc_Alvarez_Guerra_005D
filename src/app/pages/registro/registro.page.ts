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
    contraseña: '',
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
                  'rol':new FormControl("",Validators.required)
                })
               }

  ngOnInit() {
  }

registrar(){
  this.usuario.nombre=this.registroForm.value.nombre;
  this.usuario.apellido=this.registroForm.value.apellido;
  this.usuario.usuario=this.registroForm.value.usuario;
  this.usuario.contraseña=this.registroForm.value.contra;
  this.usuario.role=this.registroForm.value.rol;
  this.usuario.isactive=true;

  this.apicrud.CrearUsuario(this.usuario).subscribe();
  
  this.router.navigate(['inicio'])
  
}
}
