import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarJuegoComponent } from './registrar-juego/registrar-juego.component';
import { FormsModule } from '@angular/forms';
import { ActualizarJuegoComponent } from './actualizar-juego/actualizar-juego.component';
import { JuegoDetallesComponent } from './juego-detalles/juego-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaJuegosComponent,
    RegistrarJuegoComponent,
    ActualizarJuegoComponent,
    JuegoDetallesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
