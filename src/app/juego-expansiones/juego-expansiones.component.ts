import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExpansionesService } from '../expansiones.service';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego-expansiones',
  templateUrl: './juego-expansiones.component.html',
  styleUrls: ['./juego-expansiones.component.css']
})
export class JuegoExpansionesComponent implements OnInit {

  expansiones: any;
  idJuego: number;
  juego: Juego;
  idUsuario: number;

  constructor(private juegoServicio: JuegoService, private router: Router, private route: ActivatedRoute, private expansionServicio: ExpansionesService) { }

  ngOnInit(): void {
    this.obtenerNombreJuego();
    this.idUsuario = this.route.snapshot.params['idUsuario'];
    this.idJuego = this.route.snapshot.params['idJuego'];
    this.obtenerExpansiones(this.idJuego);
  }

  obtenerExpansiones(id: number) {
    this.expansionServicio.listarExpansiones(id).subscribe(dato => {
      this.expansiones = dato;
    });
  }

  obtenerNombreJuego() {
    this.idJuego = this.route.snapshot.params['idJuego'];
    this.juego = new Juego();
    this.juegoServicio.obtenerJuegoPorId(this.idJuego).subscribe(dato => {
      this.juego = dato;
    }, error => console.log(error));
  }

  eliminarExpansion(id: number) {
    Swal.fire({
      title: "¿Está seguro querer eliminar la expansión?",
      text: "La eliminación de la expansión será permanente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "Sí",
      cancelButtonColor: "red",
      cancelButtonText: "No"
    }).then(resultado => {
      if (resultado.value) {
        this.expansionServicio.eliminarExpansion(id).subscribe(dato => {
          this.obtenerExpansiones(this.idJuego);
        });
      }
    });
  }

  irListaJuegos() {
    this.router.navigate(['/juegos-usuario', this.idUsuario]);
  }
  agregarExpansion(id: number) {
    this.router.navigate(['expansion-agregar', this.idUsuario, id]);
  }
}
