import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../juego';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.usuario);
    this.irListaJuegos();
  }

  irListaJuegos() {
    Swal.fire({
      title: "¡Login exitoso!",
      text: "Login exitoso, redireccionando..."

    }).then(i=>{
      this.router.navigate(['/juegos']);
    });
  }
}
