import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExpansionesService } from '../expansiones.service';
import { Expansion, Juego, Usuario } from '../juego';
import { JuegoService } from '../juego.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  //Joan Salas 27/04
  //Crear un arreglo de juegos
  juegos: Juego[];
  juegosUsuario: any;
  expansiones: any;
  total: number;
  idUsuario: number;
  nombreUsuario: String;

  constructor(private juegoServicio: JuegoService, private router: Router, private expansionServicio: ExpansionesService, private usuarioServicio: UsuarioService, private route: ActivatedRoute) { }

  //Se ejecuta una vez al inicializar
  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.params['id'];
    this.obtenerJuegosUsuario();
    this.usuarioServicio.obtenerUsuarioPorId(this.idUsuario).subscribe(dato => {
      this.nombreUsuario = dato.nombreUsuario;
    });
  }
  private obtenerJuegosUsuario() {
    this.total = 0;
    let expansiones2 = [];
    this.usuarioServicio.obtenerJuegosUsuario(this.idUsuario).subscribe(dato => {
      this.juegosUsuario = dato;
      this.juegosUsuario.forEach(element => {
        this.expansionServicio.listarExpansiones(element.id).subscribe(exp => {
          this.expansiones = exp;
          this.expansiones.forEach(expa => {
            this.total += expa.precio;
            expansiones2.push(expa);
          });
        });
        this.total += element.precio;
      });
    });
    this.expansiones = expansiones2;
  }

  actualizarJuego(id: number) {
    this.router.navigate(['actualizar-juego', this.idUsuario, id]);
  }
  verDetalles(id: number) {
    this.router.navigate(['juego-detalles', this.idUsuario, id]);
  }

  eliminarJuego(id: number) {
    this.expansionServicio.listarExpansiones(id).subscribe(dato => {
      if (dato[0] == null) {
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
              this.obtenerJuegosUsuario();
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
    });
  }

  verExpansiones(id: number) {
    this.router.navigate(['juego-expansiones', this.idUsuario, id]);
  }

  agregarJuegoUsuario(id: number) {
    this.router.navigate(['registrar-juego', id]);
  }

  irLogin() {
    Swal.fire({
      title: "¿Está seguro querer cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "Sí",
      cancelButtonColor: "red",
      cancelButtonText: "No"
    }).then(resultado => {
      if (resultado.value) {
        Swal.fire({
          title: "Cerrando sesión",
          text: "Redireccionando...",
          confirmButtonText: "Ok",
        }).then(resp => {
          this.router.navigate(['/']);
        });
      }
    });
  }
}
