//importar modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//import componentes
import {HomeComponent} from './home/home.component';
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import {VideoJuegoComponent} from './videojuego/videojuego.component';
import {CursosComponent} from './cursos/cursos.component';
import {ExternoComponent} from './externo/externo.component';
import {ContactoComponent} from './contacto/contacto.component';

//crear un array de config de rutas
const appRoutes: Routes =[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'zapatillas',component:ZapatillasComponent},
    {path:'videojuegos',component:VideoJuegoComponent},
    {path:'cursos',component:CursosComponent},
    {path:'cursos/:nombre',component:CursosComponent},
    {path:'externo',component:ExternoComponent},
    {path:'contacto', component:ContactoComponent},
    {path: '**', component:HomeComponent}
];
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);