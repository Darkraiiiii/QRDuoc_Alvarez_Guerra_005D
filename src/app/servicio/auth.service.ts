import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { User, Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient,
    private router: Router) { }

  GetAllUsers(): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`)
  }

  GetUserById(codigo: any): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?usuario=${codigo}`)
  }

  IsLogged() {
    return sessionStorage.getItem('usuario') != null;
  }

  BuscarUsuarioId(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  ActualizarUsuario(usuario:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`,usuario)
  }

  IsProfesor() {
    return sessionStorage.getItem('role') == 'Profesor';
  }

  IsAlumno() {
    return sessionStorage.getItem('role') == 'Estudiante';
  }
}


