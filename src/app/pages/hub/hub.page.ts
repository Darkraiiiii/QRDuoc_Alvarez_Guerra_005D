import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { __await } from 'tslib';
import { AuthService } from 'src/app/servicio/auth.service';
import { ActionSheetController } from '@ionic/angular';
import { Weather2Service } from 'src/app/servicios/weather2.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})

export class HubPage implements OnInit {

  weather2: any;
  handlerMessage='';
  roleMessage='';
  constructor(private menuController: MenuController, private alertController: AlertController, private router: Router, private weatherService2: Weather2Service) { }

  ngOnInit() {
  }
  submitLocation(_t38: HTMLInputElement,_t40: HTMLInputElement) {
    throw new Error('Method not implemented.');
    }
  MostrarMenu() {
    this.menuController.open('first');
  }

  logout() {
    this.router.navigateByUrl('/inicio')
    return sessionStorage.removeItem('usuario')
    return sessionStorage.removeItem('isactive')
  }
  getWeather2(cityName: string, countryCode: string){
    this.weatherService2.getWeather2(cityName,countryCode).subscribe(
      res=> {
        this.weather2 = res},
      err => console.log(err)
    )
      }
  
  }