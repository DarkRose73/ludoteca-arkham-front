import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { RegistrarJuegoComponent } from './registrar-juego/registrar-juego.component';
//Joan Salas 28/04
//Configuracion de rutas
const routes: Routes = [
  //Al acceder al path juegos, redireccionare al componente lista de juegos
  {path : 'juegos',component:ListaJuegosComponent},
  //Ruta para registrar juego
  {path : 'registrar-juego',component:RegistrarJuegoComponent},
  //Al entrar a una ruta vacia, redireccionare a la ruta juegos (la de arriba)
  {path :'',redirectTo:'juegos',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
