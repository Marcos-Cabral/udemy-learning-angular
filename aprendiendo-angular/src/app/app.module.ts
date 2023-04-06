import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component'; //  ./ para decir que es la misma carpeta
import {VideoJuegoComponent} from './videojuego/videojuego.component';
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ExternoComponent } from './externo/externo.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [ //declarar directivas
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [  //instalar modulos
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent] //componente principal que se va a cargar
})
export class AppModule { } //exporto el modulo
