import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../juego';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: any;
  idUltimoUsuario: number;
  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let errores = [];
    //Validar valores repetidos en la BD
    this.usuarioServicio.obtenerTodosLosUsuarios().subscribe(dato => {
      this.usuarios = dato;
      this.usuarios.forEach(element => {
        if (element.correo == this.usuario.correo) {
          errores.push("correo repetido");
        }
        if (element.nombreUsuario == this.usuario.nombreUsuario) {
          errores.push("nombre de usuario repetido");
        }
        //Validacion de campos (largos)
        if (this.usuario.nombreUsuario.length > 60) {
          errores.push("nombre de usuario muy largo");
        }
        if (this.usuario.correo.length > 60) {
          errores.push("correo demasiado largo");
        }
        if (this.usuario.contrasenia.length > 30) {
          errores.push("contraseña muy larga");
        }
        //Si pasa las validaciones
        if (errores.length == 0) {
          Swal.fire({
            title: "Registro de usuario exitoso",
            text: "Gracias por registrarse en Ludoteca Arkham",
            icon: "success",
            confirmButtonText: "Bienvenid@"
          }).then(resultado => {
            this.crearUsuario();
          })
        }
        //Si no pasa las validaciones
        else {
          let mensaje = "";
          errores.forEach(error=>{
            mensaje+=error+" ";
          })
          Swal.fire({
            title: "Error",
            text: "No se pudo registrar el usuario, intente nuevamente. Los errores son: "+mensaje,
            icon: "error"
          })
        }
      });

    });


  }

  crearUsuario() {
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      this.irLogin();
    }, error => console.log(error));
  }

  irLogin() {
    this.router.navigate(['/']);
  }
}
