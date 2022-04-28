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

  constructor(private httpClient: HttpClient) { }

  //Metodo utilizado para obtener los juegos 
  //Observable es un patron de diseño
  obtenerListaDeJuegos(): Observable<Juego[]> {
    return this.httpClient.get<Juego[]>(`${this.baseURL}`);
  }

  //metodo utilizado para registrar juegos en la BD
  registrarJuego(juego: Juego): Observable<Object> {
    //El objeto enviado debe coincidir con el objeto en backend
    return this.httpClient.post(`${this.baseURL}`, juego);
  }

  //Metodo utilizado para actualizar juegos
  actualizarJuego(id:number, juego:Juego):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, juego);
  }

  //Metodo utilizado para obtener un juego en base a su id
  obtenerJuegoPorId(id:number):Observable<Juego>{
    return this.httpClient.get<Juego>(`${this.baseURL}/${id}`);
  }

  eliminarJuego(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
