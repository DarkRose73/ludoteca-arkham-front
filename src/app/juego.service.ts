import { HttpClient } from '@angular/common/http';
import { Expansion } from '@angular/compiler';
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
  private expansionURL = "http://localhost:8080/api/v1/expansionesjuego";
  private expURL = "http://localhost:8080/api/v1/expansiones";

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

  //Metodo utilizado para eliminar un juego de la BD
  eliminarJuego(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  //Joan Salas 04/05
  listarExpansiones(id:number):Observable<Object>{
    return this.httpClient.get<Expansion>(`${this.expansionURL}/${id}`);
  }
  listarTodasExpansiones():Observable<Object>{
    return this.httpClient.get<Expansion>(`${this.expURL}`);
  }
  eliminarExpansion(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.expURL}/${id}`)
  }
  agregarExpansion(expansion:Expansion){
    return this.httpClient.post(`${this.expURL}`, expansion);
  }
}
