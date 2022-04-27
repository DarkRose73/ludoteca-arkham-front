import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  //Joan Salas 27/04
  //Crear un arreglo de juegos
  juegos: Juego[];

  constructor() { }

  ngOnInit(): void {
    //Inicializamos el arreglo de juegos con los datos dados abajo
    this.juegos = [{
      "id": 1,
      "nombre": "Catan",
      "precio": 45000
    },
    {
      "id": 2,
      "nombre": "Fantasma Blitz",
      "precio": 10000
    }
    ];
  }

}
