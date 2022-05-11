import { Component, OnInit } from '@angular/core';
import { Usuario } from '../juego';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.usuario.id=1;
    console.log(this.usuario);
  }

}
