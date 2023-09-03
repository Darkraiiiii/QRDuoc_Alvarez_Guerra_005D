import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})
export class HubPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  MostrarMenu() {
    this.menuController.open('first');
  }
}
