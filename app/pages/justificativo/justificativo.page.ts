import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-justificativo',
  templateUrl: './justificativo.page.html',
  styleUrls: ['./justificativo.page.scss'],
})
export class JustificativoPage implements OnInit {
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  MostrarMenu() {
    this.menuController.open('first');
  }
}
