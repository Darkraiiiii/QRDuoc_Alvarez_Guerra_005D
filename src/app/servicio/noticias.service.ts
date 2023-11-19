import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaEncabezados } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpClient : HttpClient) { }

  getEncabezados(){
    return this.httpClient.get<RespuestaEncabezados>('https://newsapi.org/v2/top-headlines?country=cl&category=business&apiKey=0d7a18a2a537410695898bec6311fd41')
  }
}
