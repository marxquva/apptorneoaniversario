import { Component, OnInit, signal, computed } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { TeamService } from '@services/equipos/team.service';
import { Player } from '@interfaces/team.interface';
import { SinDatosComponent } from "@components/shared/sin-datos/sin-datos.component";
import { SituacionPipe } from "@pipes/situacion.pipe"
import { FechaNacimientoPipe } from "@pipes/fecha-nacimiento.pipe"
import { SituacionStyleDirective } from "@directives/situacion-style.directive";
import { Team } from '@interfaces/team.interface';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonModule,
    SinDatosComponent,
    SituacionPipe,
    SituacionStyleDirective,
    FechaNacimientoPipe
],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.scss'
})
export class JugadoresComponent implements OnInit {

  constructor(private teamService: TeamService) {}
  // 🔍 Signal para término de búsqueda
  searchTerm = signal<string>('');
  // 🔍 Signal para jugadores, inicialmente vacío
  players = signal<Player[]>([]);
  equipoSeleccionado: Team | null = null;
  //players: Player | null = null;
  //isLoading = signal<boolean>(true);
  totalPlayers = computed(() => this.players().length);
  visiblePlayers = computed(() => this.filteredPlayers().length);

  
  ngOnInit(): void {
    this.teamService.selectedTeam$.subscribe(team => {
      this.equipoSeleccionado = team;
      if (team?.jugadores) {
        this.players.set(team.jugadores);
      } else {
        this.players.set([]);
      }
    });

  }

  // 🔍 Método para actualizar búsqueda
  onSearchChange(value: string) {
    this.searchTerm.set(value);
  }
  
  filteredPlayers = computed(() => {
    const term = this.searchTerm().toLowerCase();

    return this.players().filter(player => {
      const nombre = player.nombre_jugador?.toLowerCase() || '';
      const posicion = player.posicion?.toLowerCase() || '';
      return nombre.includes(term) || posicion.includes(term);
    });
  });


}
