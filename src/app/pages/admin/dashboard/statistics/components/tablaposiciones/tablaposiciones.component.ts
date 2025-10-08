import { Component, OnInit  } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { SinDatosComponent } from "@components/shared/sin-datos/sin-datos.component";


export interface productsData {
  id: number;
  imagePath: string;
  team: string;
  position: string;
  partidos_jugados: string;
  partidos_ganados: number;
  partidos_empatados: number;
  partidos_perdidos: number;
  goles_favor: number;
  goles_contra: number;
  diferencia_goles: number;
  puntos: string;
}
const PRODUCT_DATA: productsData[] = [
{
  id: 1,
  imagePath: 'assets/images/profile/user-1.jpg',
  team: 'Burn in hell',
  position: 'Web Designer',
  partidos_jugados: '04',
  partidos_ganados: 3,
  partidos_empatados: 1,
  partidos_perdidos:0,
  goles_favor: 5,
  goles_contra: 2,
  diferencia_goles: 3,
  puntos: 'low'
},
{
  id: 2,
  imagePath: 'assets/images/profile/user-2.jpg',
  team: 'Alcoholica',
  position: 'Project Manager',
  partidos_jugados: '04',
  partidos_ganados: 3,
  partidos_empatados: 1,
  partidos_perdidos:0,
  goles_favor: 5,
  goles_contra: 2,
  diferencia_goles: 3,
  puntos: 'medium'
},
{
  id: 3,
  imagePath: 'assets/images/profile/user-3.jpg',
  team: 'Doomstermania',
  position: 'Project Manager',
  partidos_jugados: '04',
  partidos_ganados: 3,
  partidos_empatados: 1,
  partidos_perdidos:0,
  goles_favor: 5,
  goles_contra: 2,
  diferencia_goles: 3,
  puntos: 'high'
},
{
  id: 4,
  imagePath: 'assets/images/profile/user-4.jpg',
  team: 'Headbangers',
  position: 'Frontend Engineer',
  partidos_jugados: '04',
  partidos_ganados: 3,
  partidos_empatados: 1,
  partidos_perdidos:0,
  goles_favor: 5,
  goles_contra: 2,
  diferencia_goles: 3,
  puntos: 'critical'
},
];


@Component({
  selector: 'app-tablaposiciones',
  imports: [MatTableModule, CommonModule, MatDividerModule, SinDatosComponent],
  templateUrl: './tablaposiciones.component.html',
  styleUrl: './tablaposiciones.component.scss'
})
export class TablaposicionesComponent {
  	displayedColumns1: string[] = ['id','equipo', 'pj', 'pg', 'pe', 'pp','gf','gc','df','pts'];
    dataSource1 = PRODUCT_DATA;
}
