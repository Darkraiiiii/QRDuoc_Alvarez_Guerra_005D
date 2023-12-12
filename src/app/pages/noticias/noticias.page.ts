import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NoticiasService } from '../../servicio/noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  
  articulos :Article[]=[];

  constructor(private menuController: MenuController, 
              private noticiasservice: NoticiasService) { }

  ngOnInit() {
    this.noticiasservice.getTopHeadLines().subscribe(resp =>{
      console.log(resp);
      this.articulos.push(...resp.articles);
      })
  }
  
  mostrarMenu(){
    this.menuController.open('first');
  }

}
