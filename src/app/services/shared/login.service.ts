import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team, Torneo } from '@interfaces/login.interface';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {}

    private initialTorneos: Torneo[] = [
    {
        "idedicion": 2,
        "idtorneo": 2,
        "nombre_edicion": "Primera edicion",
        "fecha_inicio": "2025-10-12T14:00:00.000Z",
        "fecha_fin": "2025-10-26T16:00:00.000Z",
        "estado": 1,
        "nombre_torneo": "Campeones del metal"
    }
    ];

    private initialTeams: Team[] = [
    {
        "idequipo": 4,
        "nombre_equipo": "Alcoholica"
    },
    {
        "idequipo": 3,
        "nombre_equipo": "Black Diamond"
    },
    {
        "idequipo": 2,
        "nombre_equipo": "Burn In Hell"
    },
    {
        "idequipo": 8,
        "nombre_equipo": "Cancerbero"
    },
    {
        "idequipo": 7,
        "nombre_equipo": "Headbangers"
    },
    {
        "idequipo": 9,
        "nombre_equipo": "Heaven and Hell"
    },
    {
        "idequipo": 5,
        "nombre_equipo": "Necromaniac"
    },
    {
        "idequipo": 10,
        "nombre_equipo": "Yawar Warrior"
    },
    {
        "idequipo": 6,
        "nombre_equipo": "Zombie Player"
    }
    ];

    // BehaviorSubject que mantiene el estado actual de los equipos
    private torneosSubject = new BehaviorSubject<Torneo[]>(this.initialTorneos);
    // Observable público que expone los equipos
    torneos$ = this.torneosSubject.asObservable();

    // Método para obtener el observable
    getTorneos(): Observable<Torneo[]> {
        return this.torneos$;
    }

    // BehaviorSubject que mantiene el estado actual de los equipos
    private teamsSubject = new BehaviorSubject<Team[]>(this.initialTeams);
    // Observable público que expone los equipos
    teams$ = this.teamsSubject.asObservable();

    // Método para obtener el observable
    getTeams(): Observable<Team[]> {
        return this.teams$;
    }

    login(usuario: string, password: string): Observable<any> {
        const url = `${environment.apiUrl}/login`;
        const body = { usuario, password };
        return this.http.post(url, body);
    }



}