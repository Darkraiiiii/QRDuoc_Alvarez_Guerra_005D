import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],

})
export class QrPage implements OnInit {
  @ViewChild('video', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  imageUrl: String = '';

  constructor(private menuController: MenuController) { }

  async ngOnInit() {
    const videoElement: HTMLVideoElement = this.videoElement.nativeElement;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });

      videoElement.srcObject = stream;
      videoElement.play();
    } catch (error) {
      console.error('Error accessing camera: ', error);
    }
  }

  MostrarMenu() {
    this.menuController.open('first');
  }
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    this.imageUrl
 
  }
}
