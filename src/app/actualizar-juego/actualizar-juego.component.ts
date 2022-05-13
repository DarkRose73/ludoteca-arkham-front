import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-actualizar-juego',
  templateUrl: './actualizar-juego.component.html',
  styleUrls: ['./actualizar-juego.component.css']
})
export class ActualizarJuegoComponent implements OnInit {
//Autor: Joan Salas 02/05
  idJuego: number;
  juego: Juego;
  idUsuario:number;
  constructor(private route: ActivatedRoute, private juegoServicio: JuegoService, private router:Router) { }

  //Al iniciar la ventana, rescatamos los valores
  ngOnInit(): void {
    this.idJuego = this.route.snapshot.params['idJuego'];
    this.idUsuario = this.route.snapshot.params['idUsuario'];
    this.juego = new Juego();
    this.juegoServicio.obtenerJuegoPorId(this.idJuego).subscribe(dato => {
      this.juego = dato;
    });
  }

  //Método para actualizar la informacion del juego
  actualizarJuego(){
    this.juegoServicio.actualizarJuego(this.idJuego,this.juego).subscribe(dato=>{
      this.irListaJuegos();
    },error=>console.log(error));
  }

  //Metodo para movernos a la lista de juegos
  irListaJuegos() {
    this.router.navigate(['/juegos-usuario', this.idUsuario]);
  }

  //Método llamado por el formulario al momento de presionar el boton
  onSubmit() {
    let errores = [];
    if (this.juego.nombre == "") {
      errores.push("nombre vacío");
    } else {
      if (this.juego.nombre.length >= 60) {
        errores.push("nombre muy largo");
      }
    }
    if (this.juego.precio == undefined) {
      errores.push("precio vacío");
    }
    else if (this.juego.precio <= 0) {
      errores.push("precio muy bajo");
    }
    if (this.juego.edicion == undefined) {
      errores.push("edición");
    }
    if (this.juego.precio >= 2147483647) {
      errores.push("precio muy alto");
    }
    if (errores.length == 0) {
      Swal.fire({
        title: "Juego actualizado exitosamente",
        text: "El juego " + this.juego.nombre + " fue actualizado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "¡Genial!"
      }).then(resultado => {
        this.actualizarJuego();
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
