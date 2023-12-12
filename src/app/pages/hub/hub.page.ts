import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})
export class HubPage implements OnInit {
nombre:any;

numero : any;

  constructor(private menuController: MenuController,
              private router: Router,
              private alertController: AlertController,
              public authservice: AuthService) {
                this.nombre= sessionStorage.getItem('usuario');
              }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.numero = sessionStorage.getItem('id');
  }

  MostrarMenu() {
    this.menuController.open('first');
  }
  logout() {
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('id')
    this.router.navigate(['login'])
  }

}

