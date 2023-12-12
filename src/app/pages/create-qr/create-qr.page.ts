import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicio/auth.service';
import { Router } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { ApicrudService } from '../../servicio/apicrud.service';
import { qrcode } from '../interfaces/interfaces';


@Component({
  selector: 'app-create-qr',
  templateUrl: './create-qr.page.html',
  styleUrls: ['./create-qr.page.scss'],
})
export class CreateQRPage implements OnInit {

  mostrarCodigoQR = false;
  mostrarCodigoQR2 = false;

  numero: any;

  usuario = {
    id: 0,
    nombre: '',
    apellido:'',
    password: '',
    asignatura1: '',
    asignatura2: '',
    role: '',
    isactive: false
  }

  newQR: qrcode= {
    nombre: '',
    apellido:'',
    asignatura: '',
    fecha:'',

  }
  constructor(private toastController:ToastController,
              private authService: AuthService,
              private router: Router,
              private apicrud:ApicrudService) { }

  generarCodigoQR() {
    this.mostrarCodigoQR = true;

    this.newQR.nombre = this.usuario.nombre;
    this.newQR.apellido = this.usuario.apellido;
    this.newQR.asignatura = this.usuario.asignatura1;
    this.newQR.fecha = this.getFecha();
    this.apicrud.CrearQR(this.newQR).subscribe();

    // Muestra un mensaje Toast
    this.mostrarToast('Código QR generado exitosamente');
  }

  generarCodigoQR2() {
    this.mostrarCodigoQR2 = true;

    this.newQR.nombre = this.usuario.nombre;
    this.newQR.apellido = this.usuario.apellido;
    this.newQR.asignatura = this.usuario.asignatura2;
    this.newQR.fecha = this.getFecha();
    this.apicrud.CrearQR(this.newQR).subscribe();

    // Muestra un mensaje Toast
    this.mostrarToast('Código QR generado exitosamente');
  }

  qrCodeString='Muy buenas a todos' ;
  qrCodeString2='Muy buenas a todos';
  

  ngOnInit() {
  }

  ionViewWillEnter() {
    const usuarioID = this.getIdFromUrl();
    this.getUsuarioById(usuarioID);
    this.numero = sessionStorage.getItem('id');
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID: number) {
    this.authService.BuscarUsuarioId(usuarioID).subscribe(
      (resp: any) => {                 // resp llega en formato de arreglo de un objeto 
        this.usuario = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          apellido:resp[0].apellido,
          role: resp[0].role,
          password: resp[0].password,
          asignatura1: resp[0].asignatura1,
          asignatura2: resp[0].asignatura2,
          isactive: resp[0].isactive
        }
        this.qrCodeString = `${this.usuario.nombre} - ${this.usuario.apellido} - ${this.usuario.asignatura1} - ${this.getFecha()}`;
        this.qrCodeString2 = `${this.usuario.nombre} - ${this.usuario.apellido} - ${this.usuario.asignatura2} - ${this.getFecha()}`;
      }
    )
  }

  getFecha(): string {
    const today = new Date();
    const dd: string | number = today.getDate();
    const mm: string | number = today.getMonth() + 1;
    const yyyy: number = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración en milisegundos
      position: 'bottom',
    });
    toast.present();
  }
}
