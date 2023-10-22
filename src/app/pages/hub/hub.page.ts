import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})
export class HubPage implements OnInit {

  constructor(private menuController: MenuController,
    private router: Router) { }

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
}
