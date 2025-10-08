import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgScrollbar } from 'ngx-scrollbar';

interface stats {
    id: number;
    time: string;
    color: string;
    title?: string;
    subtext?: string;
    link?: string;
}

@Component({
  selector: 'app-latest-news',
  imports: [MatCardModule, NgScrollbar],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})


export class LatestNewsComponent {
  stats: stats[] = [
    {
        id: 1,
        time: '09.30 am',
        color: 'primary',
        subtext: 'Entrega de plantillas de los equipo',
    },
    {
        id: 2,
        time: '10.30 am',
        color: 'accent',
        title: 'Sorteo de los partidos y fixture',
        link: '#ML-3467',
    },
    {
        id: 3,
        time: '12.30 pm',
        color: 'success',
        subtext: 'Pago de inscripcion de los equipos',
    },
    {
        id: 4,
        time: '12.30 pm',
        color: 'warning',
        title: 'Definicion de la canchas',
        link: '#ML-3467',
    },
    {
        id: 5,
        time: '12.30 pm',
        color: 'error',
        title: 'Nuevo encuentro de la fecha',
    },
    {
        id: 6,
        time: '12.30 pm',
        color: 'success',
        subtext: 'Incorporacion de auspiciador',
    },
  ];
}
