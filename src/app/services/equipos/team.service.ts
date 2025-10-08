import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team, Player } from '@interfaces/team.interface';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '@services/shared/auth.service';



@Injectable({
  providedIn: 'root'
})

export class TeamService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Datos iniciales
  private initialTeams: Team[] = [
    /*{
      idequipo: 1,
      nombre_equipo: 'Alcoholica',
      descripcion: 'Equipo de Lima',
      logotipo: 'assets/images/logos/alcoholica.jpg',
      urlfacebook: 'https://facebook.com/equipo.alcoholica',
      procedencia: 'Lima',
      representante: 'Cristian Panduro',
      nombre_categoria_deporte: 'Fútbol Masculino',
      nombre_grupo: 'Grupo A',
      total_jugadores: 2,
      jugadores: [
        {
          idpersona: 101,
          numero_camiseta: '10',
          apodo: 'El Mago',
          posicion:'',
          nombre_jugador: 'Juan Pérez',
          Persona: {
            nombres: 'Juan',
            apellidos: 'Pérez',
            imagen: 'assets/images/players/player1.jpg',
            fecha_nacimiento: '1995-06-15',
            urlfacebook: 'https://facebook.com/juan.perez'
          }
        },
        {
          idpersona: 102,
          numero_camiseta: '7',
          apodo: 'La Bala',
          posicion:'',
          nombre_jugador: 'Carlos Ramírez',
          Persona: {
            nombres: 'Carlos',
            apellidos: 'Ramírez',
            imagen: 'assets/images/players/player2.jpg',
            fecha_nacimiento: '1997-09-21',
            urlfacebook: 'https://facebook.com/carlos.ramirez'
          }
        }
      ],
      partidos: []
    }*/
  ];

  // BehaviorSubject que mantiene el estado actual de los equipos
  private teamsSubject = new BehaviorSubject<Team[]>(this.initialTeams);
  // Observable público que expone los equipos
  teams$ = this.teamsSubject.asObservable();

  private selectedTeamSubject = new BehaviorSubject<Team | null>(null);
  selectedTeam$ = this.selectedTeamSubject.asObservable(); // Observable para suscribirse

  /*getEquipoById(id: number): Observable<Team> {
    return this.http.get<Team>(`${environment.apiUrl}/equipos/${id}`);
  }
  getEquipoById(id: number): Observable<Team> {
    return this.http.get<{ success: boolean, data: Team }>(`${environment.apiUrl}/equipos/${id}`)
      .pipe(
        map(response => response.data) // ✅ solo extrae el objeto Team
      );
  }*/
  /*getEquipoById(idedicion: number): Observable<Team[]> {
    return this.http.get<{ success: boolean, data: Team[] }>(`${environment.apiUrl}/equipos/${idedicion}`)
      .pipe(map(response => response.data)); // extrae el array
  }*/

  getEquipoById(idedicion: number): Observable<Team[]> {
    const token = this.authService.getToken(); // ✅ Usa el servicio

    const headers = {
      Authorization: `Bearer ${token}`
    };

    return this.http
      .get<{ success: boolean, data: Team[] }>(
        `${environment.apiUrl}/equipos/${idedicion}`,
        { headers }
      )
      .pipe(map(response => response.data));
  }




  // Método para obtener el observable
  getTeams(): Observable<Team[]> {
    return this.teams$;
  }

  // 🔄 Métodos CRUD
  addTeam(team: Team): void {
    const current = this.teamsSubject.getValue();
    this.teamsSubject.next([...current, team]);
  }

  updateTeam(updatedTeam: Team): void {
    const current = this.teamsSubject.getValue();
    const updatedList = current.map(team =>
      team.idequipo === updatedTeam.idequipo ? { ...team, ...updatedTeam } : team
    );
    this.teamsSubject.next(updatedList);
  }

  deleteTeam(id: number): void {
    const current = this.teamsSubject.getValue();
    this.teamsSubject.next(current.filter(team => team.idequipo !== id));
  }

  getTeamById(id: number): Team | undefined {
    const current = this.teamsSubject.getValue();
    return current.find(team => team.idequipo === id);
  }

  // Método para actualizar el equipo seleccionado
  setSelectedTeam(team: Team): void {
    this.selectedTeamSubject.next(team);
  }

  // Método opcional para obtener el valor actual
  getSelectedTeam(): Team | null {
    return this.selectedTeamSubject.getValue();
  }

  setTeams(teams: Team[]): void {
    this.teamsSubject.next(teams);
  }



}
