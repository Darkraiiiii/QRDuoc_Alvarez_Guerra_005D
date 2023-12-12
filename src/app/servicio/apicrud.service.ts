import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { Users, qrcode, qrcodes } from '../pages/interfaces/interfaces';
import { User} from '../pages/interfaces/interfaces';




@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient:HttpClient) { }

  CrearUsuario(newUsuario: User):Observable<User>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`,newUsuario)
  }

  CrearQR(newQR: qrcode):Observable<qrcodes>{
    return this.httpclient.post<qrcodes>(`${environment.apiUrl}/QRcodes`,newQR)
  }
}
