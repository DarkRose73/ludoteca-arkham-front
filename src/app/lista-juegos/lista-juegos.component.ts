import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExpansionesService } from '../expansiones.service';
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
  expansiones: any;
  total: number

  constructor(private juegoServicio: JuegoService, private router: Router, private expansionServicio:ExpansionesService) { }

  //Se ejecuta una vez al inicializar
  ngOnInit(): void {
    this.obtenerJuegos();
  }

  //Metodo para obtener los datos de los juegos
  private obtenerJuegos() {
    this.total = 0;
    //Llamamos a la función para obtener los juegos desde el servicio
    this.expansionServicio.listarTodasExpansiones().subscribe(exp => {
      this.expansiones = exp;
      this.expansiones.forEach(expa => {
        this.total += expa.precio;
      });
    });
    this.juegoServicio.obtenerListaDeJuegos().subscribe(dato => {
      //Agregamos los datos de la llamada al arreglo juego creado anteriormente (lin:14)
      this.juegos = dato;
      dato.forEach(juego => {
        this.total += juego.precio;
      });
    });
  }

  actualizarJuego(id: number) {
    this.router.navigate(['actualizar-juego', id]);
  }

  eliminarJuego(id: number) {

    let expas = [];
    this.expansiones.forEach(element => {
      if (element.idJuego == id) {
        expas.push(1);
      }
    });

    if (expas.length == 0) {
      Swal.fire({
        title: "¿Está seguro querer eliminar el juego?",
        text: "La eliminación del juego será permanente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "green",
        confirmButtonText: "Sí",
        cancelButtonColor: "red",
        cancelButtonText: "No"
      }).then(resultado => {
        if (resultado.value) {
          this.juegoServicio.eliminarJuego(id).subscribe(dato => {
            this.obtenerJuegos();
          });
        }
      });
    } else {
      Swal.fire({
        title: "Error al eliminar juego",
        text: "No se puede eliminar un juego que tenga expansiones, elimine las expansiones primero",
        icon: "warning",
      });
    }

  }

  verDetalles(id: number) {
    this.router.navigate(['juego-detalles', id]);
  }
  verExpansiones(id: number) {
    this.router.navigate(['juego-expansiones', id]);
  }
}
