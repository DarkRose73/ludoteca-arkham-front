import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expansion } from './juego';

@Injectable({
  providedIn: 'root'
})
export class ExpansionesService {

  private expansionURL = "http://localhost:8080/api/v1/expansionesjuego";
  private expURL = "http://localhost:8080/api/v1/expansiones";

  constructor(private httpClient: HttpClient) { }

  
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
  registrarExpansion(expansion:Expansion):Observable<Object>{
    return this.httpClient.post(`${this.expURL}`, expansion);
  }
}
