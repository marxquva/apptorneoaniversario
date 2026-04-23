import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from '@angular/common';
import { MatListModule } from "@angular/material/list";
import { TeamService } from '@services/equipos/team.service';
import { LoadingService } from '@services/shared/loading.service';
import { Team } from '@interfaces/team.interface';
import { EstadoService } from '@services/shared/estado.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-listado-team',
  imports: [RouterModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule, CommonModule, MatListModule],
  templateUrl: './listado-team.component.html',
  styleUrl: './listado-team.component.scss'
})
export class ListadoTeamComponent implements OnInit{

  private teamService = inject(TeamService);
  private loadingService = inject(LoadingService);
  private estadoService = inject(EstadoService);
  private breakpointObserver = inject(BreakpointObserver);
  

  teams = signal<Team[]>([]);
  
  totalTeams = computed(() => this.teams().length);
  visibleTeams = computed(() => this.filteredTeams().length);
  searchTerm = signal<string>('');
  
  filteredTeams = computed(() => {
    const term = (this.searchTerm() || '').toLowerCase();

    return this.teams().filter(team =>
      (team.nombre_equipo || '').toLowerCase().includes(term) ||
      (team.descripcion || '').toLowerCase().includes(term)
    );
  });


  ngOnInit(): void {
    this.teamService.getTeams().subscribe(teams => {
      this.teams.set(teams);
    });
  }

  onSearchChange(value: string) {
    this.searchTerm.set(value);
  }

  fn_detalle_equipo(value: number) {
    const team = this.teamService.getTeamById(value);
    //console.log(value, team);
    if (team) {
      this.teamService.setSelectedTeam(team); // ✅ Guardas en el servicio
      this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
        if (result.matches) {
          // Si es móvil, inicializamos el estado a true en el servicio
          this.estadoService.setMostrar(false);
        }
      });
    } else {
      console.log('Equipo no encontrado');
    }
  }



}
