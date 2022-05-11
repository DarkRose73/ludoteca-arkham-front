import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExpansionesService } from '../expansiones.service';
import { Expansion, Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-agregar-expansion',
  templateUrl: './agregar-expansion.component.html',
  styleUrls: ['./agregar-expansion.component.css']
})
export class AgregarExpansionComponent implements OnInit {

  expansion: Expansion = new Expansion();
  idJuego: number;
  juego : Juego;

  constructor(private juegoServicio: JuegoService, private router: Router, private route: ActivatedRoute, private expansionServicio:ExpansionesService) { }

  ngOnInit(): void {
    this.obtenerNombreJuego();
  }

  onSubmit() {
    this.idJuego = this.route.snapshot.params['id'];
    this.expansion.idJuego=this.idJuego;
    let errores = [];
    if (this.expansion.nombre == undefined) {
      errores.push("nombre");
    } else {
      if (this.expansion.nombre.length >= 60) {
        errores.push("nombre muy largo");
      }
    }
    if (this.expansion.precio == undefined) {
      errores.push("precio");
    }
    if (this.expansion.precio <= 0) {
      errores.push("precio");
    }
    if (this.expansion.precio >= 2147483647) {
      errores.push("precio muy alto");
    }
    if (errores.length == 0) {
      Swal.fire({
        title: "Juego agregado exitosamente",
        html: "La expansión: " + this.expansion.nombre + "\ndel juego: "+ this.juego.nombre+"\nfue agregada exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "¡Genial!"
      }).then(resultado => {
        this.guardarExpansion();
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

  obtenerNombreJuego() {
    this.idJuego = this.route.snapshot.params['id'];
    this.juego = new Juego();
    this.juegoServicio.obtenerJuegoPorId(this.idJuego).subscribe(dato => {
      this.juego = dato;
    }, error => console.log(error));
  }

  guardarExpansion(){
    this.expansionServicio.registrarExpansion(this.expansion).subscribe(dato => {
      this.irListaExpansiones();
    }, error => console.log(error));
  }

  irListaExpansiones(){
    this.router.navigate(['juego-expansiones', this.idJuego]);
  }

}
