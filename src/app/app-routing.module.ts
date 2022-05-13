import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarJuegoComponent } from './actualizar-juego/actualizar-juego.component';
import { AgregarExpansionComponent } from './agregar-expansion/agregar-expansion.component';
import { JuegoDetallesComponent } from './juego-detalles/juego-detalles.component';
import { JuegoExpansionesComponent } from './juego-expansiones/juego-expansiones.component';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistrarJuegoComponent } from './registrar-juego/registrar-juego.component';
//Joan Salas 28/04
//Configuracion de rutas
const routes: Routes = [
  //Al acceder al path juegos, redireccionare al componente lista de juegos
  { path: 'juegos', component: ListaJuegosComponent },
  //Ruta para registrar juego
  { path: 'registrar-juego/:idUsuario', component: RegistrarJuegoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'juegos-usuario/:id', component: ListaJuegosComponent },
  //Al entrar a una ruta vacia, redireccionare a la ruta juegos (la de arriba)
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'actualizar-juego/:idUsuario/:idJuego', component: ActualizarJuegoComponent },
  { path: 'juego-detalles/:idUsuario/:idJuego', component: JuegoDetallesComponent },
  { path: 'juego-expansiones/:idUsuario/:idJuego', component: JuegoExpansionesComponent },
  { path: 'expansion-agregar/:idUsuario/:idJuego', component: AgregarExpansionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
