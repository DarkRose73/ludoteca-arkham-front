import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-registrar-juego',
  templateUrl: './registrar-juego.component.html',
  styleUrls: ['./registrar-juego.component.css']
})
export class RegistrarJuegoComponent implements OnInit {

  //Joan Salas 28/04
  juego: Juego = new Juego();
  constructor(private juegoServicio:JuegoService,private router:Router) { }

  ngOnInit(): void {
    
  }

  //Este método llama al método del mismo nombre en juego.services.ts (lin:25)
  guardarJuego(){
    this.juegoServicio.registrarJuego(this.juego).subscribe(dato =>{
      console.log(dato);
      this.irListaJuegos();
    },error => console.log(error));
  }

  //Metodo para movernos a la lista de juegos
  irListaJuegos(){
    this.router.navigate(['/juegos']);
  }

  //Metodo llamado por el formulario al realizar el submit (rellenar y presionar boton guardar)
  onSubmit() {
    this.guardarJuego();
  }

}
