import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';
import Swal from 'sweetalert2';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-registrar-juego',
  templateUrl: './registrar-juego.component.html',
  styleUrls: ['./registrar-juego.component.css']
})
export class RegistrarJuegoComponent implements OnInit {

  //Joan Salas 28/04
  juego: Juego = new Juego();
  constructor(private juegoServicio: JuegoService, private router: Router) { }

  ngOnInit(): void {

  }

  //Este método llama al método del mismo nombre en juego.services.ts (lin:25)
  guardarJuego() {
    this.juegoServicio.registrarJuego(this.juego).subscribe(dato => {
      console.log(dato);
      this.irListaJuegos();
    }, error => console.log(error));
  }

  //Metodo para movernos a la lista de juegos
  irListaJuegos() {
    this.router.navigate(['/juegos']);
  }

  //Metodo llamado por el formulario al realizar el submit (rellenar y presionar boton guardar)
  onSubmit() {
    let errores = [];
    if (this.juego.nombre == undefined) {
      errores.push("nombre");
    } else {
      if (this.juego.nombre.length >= 60) {
        errores.push("nombre muy largo");
      }
    }
    if (this.juego.precio == undefined) {
      errores.push("precio");
    }
    if (this.juego.precio <= 0) {
      errores.push("precio");
    }
    if (this.juego.edicion == undefined) {
      errores.push("edición");
    }
    if (this.juego.precio >= 2147483647) {
      errores.push("precio muy alto");
    }
    if (errores.length == 0) {
      Swal.fire({
        title: "Juego agregado exitosamente",
        text: "El juego " + this.juego.nombre + " fue agregado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "¡Genial!"
      }).then(resultado => {
        this.guardarJuego();
      });

    } else {
      let cadena = "Error en: ";
      errores.forEach(element => {
        cadena += element + " ";
      });
      Swal.fire({
        title: "Error con los datos ingresados",
        text: cadena,
        icon: "error"
      });
    }
  }
}
