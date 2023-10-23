import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { __await } from 'tslib';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})
export class HubPage implements OnInit {
  
  handlerMessage='';
  roleMessage='';
  constructor(private menuController: MenuController, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  MostrarMenu() {
    this.menuController.open('first');
  }

  logout() {
    this.router.navigateByUrl('/inicio')
    return sessionStorage.removeItem('usuario')
    return sessionStorage.removeItem('isactive')
  }

  async mensaje(){
    if(localStorage.getItem('ingresado')=='true')
    {
      const alert = await this.alertController.create({
        header: 'Bienvenido a TeLLevoApp ' + localStorage.getItem('nombre'),
        buttons: [
          {
            text: 'Gracias',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'disfrute nuestro servicio';
            },
          },
        ],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }
  }}