import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expansion, Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego-detalles',
  templateUrl: './juego-detalles.component.html',
  styleUrls: ['./juego-detalles.component.css']
})

//Autor: Joan Salas 02/05
export class JuegoDetallesComponent implements OnInit {

  id:number
  juego:Juego
  expansiones:any;
  constructor(private route:ActivatedRoute, private juegoServicio:JuegoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.juego = new Juego();
    this.juegoServicio.obtenerJuegoPorId(this.id).subscribe(dato=>{
      this.juego = dato;
    },error => console.log(error));
    this.juegoServicio.listarExpansiones(this.id).subscribe(dato=>{
      this.expansiones=(dato);
    })
  }

}
