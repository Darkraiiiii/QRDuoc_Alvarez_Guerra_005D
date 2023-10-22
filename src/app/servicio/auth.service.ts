import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  GetAllUsers(): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`)
  }

  GetUserById(codigo: any): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?usuarios=${codigo}`)
  }

  IsLogged() {
    return sessionStorage.getItem('username') != null;
  }
}


