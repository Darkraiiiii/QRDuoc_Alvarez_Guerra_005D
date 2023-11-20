import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})
export class HubPage implements OnInit {
nombre:any;

  constructor(private menuController: MenuController,
              private router: Router,
              private alertController: AlertController,) {
                this.nombre= sessionStorage.getItem('usuario');
              }

  ngOnInit() {
  }

  MostrarMenu() {
    this.menuController.open('first');
  }
  logout() {
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('role')
    this.router.navigate(['login'])
  }

}

