import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../juego';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  idUsuario: number;
  constructor(private router: Router, private usuariosServicio: UsuarioService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.usuariosServicio.obtenerUsuarioPorCorreo(this.usuario.correo).subscribe(usuarioCorrecto => {
      if (usuarioCorrecto.correo == this.usuario.correo && usuarioCorrecto.contrasenia == this.usuario.contrasenia) {
        this.idUsuario = usuarioCorrecto.id;
        this.irListaJuegos();

      } else {
        Swal.fire({
          title: "Error al ingresar",
          text: "Credenciales incorrectas, intente nuevamente"
        }).then(i => {
          this.router.navigate['/login'];
        })
      }
    });
  }

  irListaJuegos() {
    Swal.fire({
      title: "¡Login exitoso!",
      text: "Login exitoso, redireccionando..."

    }).then(i => {
      this.router.navigate(['/juegos-usuario', this.idUsuario]);
    });
  }
}
