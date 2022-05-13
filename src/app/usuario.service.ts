import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego, Usuario } from './juego';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = "http://localhost:8080/api/v1/usuarios";
  private  juegosUsuario = "http://localhost:8080/api/v1/juegosUsuario";
  private  usuarioId = "http://localhost:8080/api/v1/usuarioPorId";
  constructor(private httpClient: HttpClient) { }

  registrarUsuario(Usuario: Usuario): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, Usuario);
  }

  //Deberia buscar por correo o nombreUsuario
  obtenerUsuarioPorCorreo(correo: String): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseURL}/${correo}`);
  }

  obtenerJuegosUsuario(id: number): Observable<Juego> {
    return this.httpClient.get<Juego>(`${this.juegosUsuario}/${id}`);
  }

  obtenerTodosLosUsuarios():Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}`);
  }

  obtenerUsuarioPorId(id:number):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.usuarioId}/${id}`);
  }
}
