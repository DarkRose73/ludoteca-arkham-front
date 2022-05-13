import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpansionesService } from '../expansiones.service';
import { Expansion, Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego-detalles',
  templateUrl: './juego-detalles.component.html',
  styleUrls: ['./juego-detalles.component.css']
})

//Autor: Joan Salas 02/05
export class JuegoDetallesComponent implements OnInit {

  idJuego:number;
  idUsuario:number;
  juego:Juego;
  expansiones:any;
  constructor(private route:ActivatedRoute, private juegoServicio:JuegoService, private expansionServicio:ExpansionesService, private router:Router) { }

  ngOnInit(): void {
    this.idJuego = this.route.snapshot.params['idJuego'];
    this.idUsuario = this.route.snapshot.params['idUsuario'];
    this.juego = new Juego();
    this.juegoServicio.obtenerJuegoPorId(this.idJuego).subscribe(dato=>{
      this.juego = dato;
    },error => console.log(error));
    this.expansionServicio.listarExpansiones(this.idJuego).subscribe(dato=>{
      this.expansiones=(dato);
    })
  }

  irListaJuegos() {
    this.router.navigate(['/juegos-usuario', this.idUsuario]);
  }
}
