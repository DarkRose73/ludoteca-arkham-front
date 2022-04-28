import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  //Joan Salas 27/04
  //Crear un arreglo de juegos
  juegos: Juego[];

  constructor(private juegoServicio:JuegoService) { }

  //Se ejecuta una vez al inicializar
  ngOnInit(): void {
    this.obtenerJuegos();
  }

  //Metodo para obtener los datos de los juegos
  private obtenerJuegos(){
    //Llamamos a la función para obtener los juegos desde el servicio
    this.juegoServicio.obtenerListaDeJuegos().subscribe(dato =>{
      //Agregamos los datos de la llamada al arreglo juego creado anteriormente (lin:14)
      this.juegos = dato;
    });
  }
}
