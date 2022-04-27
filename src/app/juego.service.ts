import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  //Joan Salas 27/04
  //aquí va el URL que se crea desde el backend
  //URL obtiene el listado de todos los juegos de la BD
  private baseURL = "http://localhost:8080/api/v1/juegos";

  constructor(private httpClient:HttpClient) { }

  //Metodo utilizado para obtener los empleados 
  //Observable es un patron de diseño
  obtenerLisaDeJuegos():Observable<Juego[]>{
    return this.httpClient.get<Juego[]>(`${this.baseURL}`);
  }
}
