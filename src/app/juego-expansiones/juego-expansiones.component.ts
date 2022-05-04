import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego-expansiones',
  templateUrl: './juego-expansiones.component.html',
  styleUrls: ['./juego-expansiones.component.css']
})
export class JuegoExpansionesComponent implements OnInit {

  expansiones:any;
  idJuego:number;
  juego:Juego;

  constructor(private juegoServicio:JuegoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerNombreJuego();
    this.idJuego = this.route.snapshot.params['id'];
    this.obtenerExpansiones(this.idJuego);
  }

  obtenerExpansiones(id:number){
    this.juegoServicio.listarExpansiones(id).subscribe(dato=>{
      this.expansiones=dato;
    });
  }

  obtenerNombreJuego(){
    this.idJuego = this.route.snapshot.params['id'];
    this.juego = new Juego();
    this.juegoServicio.obtenerJuegoPorId(this.idJuego).subscribe(dato=>{
      this.juego = dato;
    },error => console.log(error));
  }

}
